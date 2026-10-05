import { GameEvent, GameState, SoldierState } from "./domain";

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

export function logTransition(
  before: GameState,
  event: GameEvent,
  after: GameState
): void {
  const missions =
    before.missions.length === after.missions.length
      ? ""
      : `\n${ansi.dim}missions${ansi.reset}  ${before.missions.length} ${arrow} ${after.missions.length}`;

  console.log(
    `${ansi.dim}event${ansi.reset}  ${ansi.bold}${ansi.cyan}${event.type}${ansi.reset}\n` +
      `${ansi.dim}state${ansi.reset}  ${showClock(before, after)}${missions}\n` +
      rosterTransition(before, after)
  );
}

export function logApply(state: GameState, event: GameEvent): void {
  const roster = state.roster
    .map((s) => {
      const status = `${statusAnsi[s.status]}${ansi.bold}${s.status.padEnd(7)}${ansi.reset}`;
      const hp = paintNum(s.health);
      const sta = paintNum(s.stamina);
      return `  ${s.name.padEnd(8)} ${status}  hp ${hp}  stamina ${sta}`;
    })
    .join("\n");

  const missions =
    state.missions.length === 0
      ? ""
      : `\n${ansi.dim}missions${ansi.reset}  ${state.missions.length}`;

  console.log(
    `${ansi.dim}event${ansi.reset}  ${ansi.bold}${ansi.cyan}${event.type}${ansi.reset}\n` +
      `${ansi.dim}state${ansi.reset}  day ${state.day}  hour ${String(state.hour).padStart(2)}${missions}\n` +
      roster
  );
}
