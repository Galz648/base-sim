import { GameEvent, GameState, Mission, SoldierState } from "./domain";

const ansi = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};

const statusAnsi: Record<SoldierState["status"], string> = {
  active: ansi.green,
  rest: ansi.yellow,
  injury: ansi.red,
};

const missionAnsi: Record<Mission["status"], string> = {
  pending: ansi.yellow,
  "not-started": ansi.dim,
  done: ansi.green,
};

function vitalAnsi(n: number): string {
  if (n >= 70) return ansi.green;
  if (n >= 40) return ansi.yellow;
  return ansi.red;
}

function paintNum(n: number): string {
  return `${vitalAnsi(n)}${String(n).padStart(3)}${ansi.reset}`;
}

const arrow = `${ansi.dim}->${ansi.reset}`;

function showNum(label: string, before: number, after: number): string {
  if (before === after) return `${label} ${paintNum(after)}`;
  return `${label} ${paintNum(before)} ${arrow} ${paintNum(after)}`;
}

function paintStatus(status: SoldierState["status"]): string {
  return `${statusAnsi[status]}${ansi.bold}${status.padEnd(7)}${ansi.reset}`;
}

function showStatus(
  before: SoldierState["status"],
  after: SoldierState["status"]
): string {
  if (before === after) return paintStatus(after);
  return `${paintStatus(before)} ${arrow} ${paintStatus(after)}`;
}

function showClock(before: GameState, after: GameState): string {
  const day =
    before.day === after.day
      ? `day ${before.day}`
      : `day ${before.day} ${arrow} ${after.day}`;
  const hour =
    before.hour === after.hour
      ? `hour ${String(after.hour).padStart(2)}`
      : `hour ${String(before.hour).padStart(2)} ${arrow} ${String(after.hour).padStart(2)}`;
  return `${day}  ${hour}`;
}

function rosterTransition(before: GameState, after: GameState): string {
  const afterById = new Map<number, SoldierState>();
  for (const s of after.roster) afterById.set(s.id, s);
  const seen = new Set<number>();
  const lines: string[] = [];

  for (const prev of before.roster) {
    seen.add(prev.id);
    const next = afterById.get(prev.id);
    if (!next) {
      lines.push(`  ${prev.name.padEnd(8)} ${ansi.red}left${ansi.reset}`);
      continue;
    }
    lines.push(
      `  ${prev.name.padEnd(8)} ${showStatus(prev.status, next.status)}  ${showNum("hp", prev.health, next.health)}  ${showNum("stamina", prev.stamina, next.stamina)}`
    );
  }

  for (const next of after.roster) {
    if (seen.has(next.id)) continue;
    lines.push(`  ${next.name.padEnd(8)} ${ansi.green}joined${ansi.reset}`);
  }

  return lines.join("\n");
}

function visibleLen(s: string): number {
  return s.replace(/\x1b\[[0-9;]*m/g, "").length;
}

function padVisible(s: string, width: number): string {
  const n = visibleLen(s);
  if (n > width) return s.replace(/\x1b\[[0-9;]*m/g, "").slice(0, width);
  return s + " ".repeat(width - n);
}

function paintMissionStatus(status: Mission["status"]): string {
  return `${missionAnsi[status]}${ansi.bold}${status}${ansi.reset}`;
}

function showMissionStatus(
  before: Mission["status"],
  after: Mission["status"]
): string {
  if (before === after) return paintMissionStatus(after);
  return `${paintMissionStatus(before)} ${arrow} ${paintMissionStatus(after)}`;
}

function crewNames(ids: number[], roster: SoldierState[]): string {
  if (ids.length === 0) return "—";
  const byId = new Map<number, string>();
  for (const s of roster) byId.set(s.id, s.name);
  return ids.map((id) => byId.get(id) ?? `#${id}`).join(", ");
}

function missionPanel(before: GameState, after: GameState): string[] {
  const lines = [`${ansi.dim}missions${ansi.reset}`];
  if (after.missions.length === 0) {
    lines.push(`  ${ansi.dim}none${ansi.reset}`);
    return lines;
  }

  const beforeById = new Map<number, Mission>();
  for (const m of before.missions) beforeById.set(m.id, m);
  for (const m of after.missions) {
    const prev = beforeById.get(m.id);
    const status = prev
      ? showMissionStatus(prev.status, m.status)
      : `${ansi.green}new${ansi.reset} ${paintMissionStatus(m.status)}`;
    const crew = `${m.assigned.length}/${m.requiredSolders}`;
    lines.push(`  ${ansi.bold}${m.name}${ansi.reset}`);
    lines.push(`    ${status}  ${crew}  ${m.duration}h`);
    if (m.assigned.length > 0) {
      lines.push(
        `    ${ansi.dim}${crewNames(m.assigned, after.roster)}${ansi.reset}`
      );
    }
  }

  const afterIds = new Set(after.missions.map((m) => m.id));
  for (const m of before.missions) {
    if (afterIds.has(m.id)) continue;
    lines.push(`  ${m.name} ${ansi.red}removed${ansi.reset}`);
  }

  return lines;
}

function zipColumns(left: string[], right: string[]): string {
  const total = process.stdout.columns ?? 80;
  const content = left.reduce((m, s) => Math.max(m, visibleLen(s)), 0);
  const reserved = 28;
  const leftWidth = Math.min(
    Math.max(content, 24),
    Math.max(24, total - reserved)
  );
  const gutter = ` ${ansi.dim}│${ansi.reset} `;
  const rows = Math.max(left.length, right.length);
  const lines: string[] = [];
  for (let i = 0; i < rows; i++) {
    lines.push(
      `${padVisible(left[i] ?? "", leftWidth)}${gutter}${right[i] ?? ""}`
    );
  }
  return lines.join("\n");
}

export function logTransition(
  before: GameState,
  event: GameEvent,
  after: GameState
): void {
  const left = [
    `${ansi.dim}event${ansi.reset}  ${ansi.bold}${ansi.cyan}${event.type}${ansi.reset}`,
    `${ansi.dim}state${ansi.reset}  ${showClock(before, after)}`,
    ...rosterTransition(before, after).split("\n"),
  ];
  console.log(zipColumns(left, missionPanel(before, after)));
}

export function logApply(state: GameState, event: GameEvent): void {
  const left = [
    `${ansi.dim}event${ansi.reset}  ${ansi.bold}${ansi.cyan}${event.type}${ansi.reset}`,
    `${ansi.dim}state${ansi.reset}  day ${state.day}  hour ${String(state.hour).padStart(2)}`,
    ...state.roster.map((s) => {
      const status = `${statusAnsi[s.status]}${ansi.bold}${s.status.padEnd(7)}${ansi.reset}`;
      return `  ${s.name.padEnd(8)} ${status}  hp ${paintNum(s.health)}  stamina ${paintNum(s.stamina)}`;
    }),
  ];
  console.log(zipColumns(left, missionPanel(state, state)));
}
