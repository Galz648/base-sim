import { GameState, GameEvent } from "./domain/domain";
import { HourElapsedEvent } from "./domain/domain";
function tick(): HourElapsedEvent {
    console.log(`tick`)
    return {
        type: "HourElapsed"
    }
}

type Store = {
    events: GameEvent[],
    dispatch(event: GameEvent): void,
    subscribe(cb: Callable): void


}
type Time = { hour: number, day: number }
function incrementTime(time: Time): Time {
    console.log(JSON.stringify({ currentDay: time.day, currentHour: time.hour }))
    const increment = (x: number) => x + 1
    const total_time = increment(time.hour) + time.day * 24
    const hour = total_time % 24;
    const day = Math.floor(total_time / 24);
    console.log(JSON.stringify({ day, hour }))

    return {
        hour,
        day
    }
}
function reduce(state: GameState, event: GameEvent): GameState {

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
    events: [],
    dispatch: function (event: GameEvent): void {
        this.events.append(event) //TODO: determine if LIFO or FIFO, currently LIFO
    },
    subscribe: function (cb: Callable): void {
        cb()
    }
}

export { reduce, tick, store }
