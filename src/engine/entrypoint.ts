import { GameState, GameEvent } from "./domain/domain";
import { apply } from "./engine";
const state = apply({
    day: {
        number: 1,
        missions: [],
        hour: 1,
    }, roster: []
}, { type: "HourElapsed" })
