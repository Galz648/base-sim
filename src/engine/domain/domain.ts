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


type Day = {
    number: number;
    missions: Mission[];
    hour: number;
}

type GameState = {
    day: Day;
    roster: SoldierState[]
}

type GameEvent = { type: "HourElapsed" }





export type { Mission, Day, GameState, GameEvent };
