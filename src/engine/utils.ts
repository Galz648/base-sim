import { GameEvent, GameState, SoldierState } from "./domain/domain";

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

export function logApply(state: GameState, event: GameEvent): void {
  const roster = state.roster
    .map((s) => {
      const status = `${statusAnsi[s.status]}${ansi.bold}${s.status.padEnd(7)}${ansi.reset}`;
      const hp = paintNum(s.health);
      const sta = paintNum(s.stamina);
      return `  ${s.name.padEnd(8)} ${status}  hp ${hp}  status ${sta}`;
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
