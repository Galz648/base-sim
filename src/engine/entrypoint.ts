import { GameState, GameEvent, HourElapsedEvent } from "./domain/domain";
import { reduce, store, tick } from "./engine";


(
    () => {
        setInterval(() => {
            const event = tick();
            store.dispatch(event)


        }, 1000)
        // TODO: engine code
    }
)()
