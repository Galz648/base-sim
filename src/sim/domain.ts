interface SoldierState {
  id: number;
  name: string;
  health: number;
  stamina: number;
  status: "injury" | "active" | "rest";
}
type SoldierId = SoldierState["id"];

type ActiveMission = {
  id: number;
  remaining: number;
  assigned: SoldierId[];
  name: string;
};
type CompletedMission = {
  id: number;
  name: string;
};

const MISSION_STATUS = ["pending", "done", "available"] as const;
type MissionStatus = (typeof MISSION_STATUS)[number];

type Mission = {
  id: number;
  duration: number;
  assigned: SoldierId[];
  name: string;
  requiredSolders: number;
  status: MissionStatus;
};

type GameState = {
  day: number;
  missions: Mission[];
  hour: number;
  roster: SoldierState[];
  in_progress: ActiveMission[];
  completed: CompletedMission[];
};

type CompletedMissionEvent = {
  type: "MissionCompleted";
  mission_id: number;
  name: string;
};
type HourElapsedEvent = { type: "HourElapsed" };
type GameEvent = HourElapsedEvent | CompletedMissionEvent;

export { MISSION_STATUS };
export type {
  Mission,
  MissionStatus,
  GameState,
  GameEvent,
  HourElapsedEvent,
  SoldierState,
  ActiveMission,
  CompletedMission,
  CompletedMissionEvent,
};
