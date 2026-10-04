import { GameState, GameEvent } from "./domain/domain";
import { HourElapsedEvent } from "./domain/domain";
function tick(): HourElapsedEvent {
    console.log(`tick`)
    return {
        type: "HourElapsed"
    }
}

type Store = {
    getState(): GameState
    state: GameState,
    events: GameEvent[],
    dispatch(event: GameEvent): void,
    subscribe(cb: Callable): void


}
type Time = { hour: number, day: number }
function incrementTime(time: Time): Time {
    const increment = (x: number) => x + 1
    const total_time = increment(time.hour) + time.day * 24
    const hour = total_time % 24;
    const day = Math.floor(total_time / 24);

    return {
        hour,
        day
    }
}
function reduce(state: GameState, event: GameEvent): GameState {
    console.log(
        `Event: ${JSON.stringify(event)} | Reduced State: ${JSON.stringify(state)}`
    );
    switch (event.type) {
        case "HourElapsed":
            // For now, just return the state unchanged

            const time = incrementTime({
                day: state.day,
                hour: state.hour
            })
            return {
                ...state,
                ...time
            }
        default:
            // This ensures exhaustiveness
            const _exhaustive: never = event.type;
            return state;
    }


}

const store: Store = {
    state: {
        roster: [],
        day: 1,
        missions: [],
        hour: 1
    },
    events: [],
    dispatch: function (event: GameEvent): void {
        // this.events.push_front(event)
        this.state = reduce(this.state, event);
    },
    subscribe: function (cb: Callable): void {
        cb();
    },
    getState: function (): GameState {
        return this.state
    }
}

export { reduce, tick, store }
