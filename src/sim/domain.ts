interface SoldierState {
  id: number;
  name: string;
  health: number;
  stamina: number;
  status: "injury" | "active" | "rest";
}
type SoldierId = SoldierState["id"];

type Mission = {
  id: number;
  duration: number;
  assigned: SoldierId[];
  name: string;
  requiredSolders: number;
  status: "pending" | "done" | "not-started";
};

type GameState = {
  day: number;
  missions: Mission[];
  hour: number;
  roster: SoldierState[];
};
type HourElapsedEvent = { type: "HourElapsed" };
type GameEvent = HourElapsedEvent;

export type { Mission, GameState, GameEvent, HourElapsedEvent, SoldierState };
