interface SoldierState {
    id: number,
    name: string,
    health: number,
    stamina: number,
    status: "injury" | "active" | "rest"
}

type Mission = {
    id: string;
    name: string;
    requiredSolders: number;
    outcome: "pending" | "success" | "failure"
}
export { type SoldierState }


// type Day = {

// }

type GameState = {
    day: number;
    missions: Mission[];
    hour: number;
    roster: SoldierState[]
}
type HourElapsedEvent = { type: "HourElapsed" }
type GameEvent = { type: "HourElapsed" }





export type { Mission, GameState, GameEvent, HourElapsedEvent };
