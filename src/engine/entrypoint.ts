import { GameState, GameEvent, HourElapsedEvent } from "./domain/domain";
import { reduce, store, tick } from "./engine";


(
    () => {
        let state: GameState = {
            roster: [],
            day: 1,
            missions: [],
            hour: 1
        }
        setInterval(() => {
            const event = tick();
            state = reduce(state, event);
            console.log(
                `Event: ${JSON.stringify(event)} | Reduced State: ${JSON.stringify(state)}`
            );

        }, 1000)
        // TODO: engine code
    }
)()
