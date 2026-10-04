interface SoldierState {
    id: string,
    name: string,
    health: number,
    status: "injury" | "health" | "dead" | "rest"
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





export type { Mission, Day, GameState, GameEvent, HourElapsedEvent };
