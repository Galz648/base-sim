import { GameState, GameEvent } from "./domain/domain";
import { HourElapsedEvent } from "./domain/domain";

function tick(): HourElapsedEvent {
    return {
        type: "HourElapsed"
    }
}

type Store = {
    events: GameEvent[]
}

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

const store: Store = { events: [] }

export { apply, tick, store }
