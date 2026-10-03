import { GameState, GameEvent } from "./domain/domain";

function apply(state: GameState, event: GameEvent): GameState {

    switch (event.type) {
        case "HourElapsed":
            // For now, just return the state unchanged

            return state;
        default:
            // This ensures exhaustiveness
            const _exhaustive: never = event.type;
            return state;
    }


}

export { apply }
