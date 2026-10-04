import { MathPort } from "../boundary";
import { CONFIG } from "./config";
import {
  GameState,
  GameEvent,
  SoldierState,
  HourElapsedEvent,
} from "./domain/domain";
import { logTransition } from "./utils";

type Store = {
  getState(): GameState;
  state: GameState;
  events: GameEvent[];
  dispatch(event: GameEvent): void;
  subscribe(cb: Callable): void;
};

type Time = { hour: number; day: number };

class Engine {
  private math: MathPort;
  store: Store;

  constructor(math: MathPort) {
    this.math = math;
    this.store = {
      state: {
        roster: [
          { id: 2, name: "Gal", health: 100, stamina: 50, status: "rest" },
          { id: 1, name: "Nir", health: 100, stamina: 100, status: "active" },
        ],
        day: 1,
        missions: [],
        hour: 1,
      },
      events: [],
      dispatch: (event: GameEvent): void => {
        // this.store.events.push_front(event)
        this.store.state = this.apply(this.store.state, event);
      },
      subscribe: function (cb: Callable): void {
        cb();
      },
      getState: function (): GameState {
        return this.state;
      },
    };
  }

  tick(): HourElapsedEvent {
    console.log(`tick`);
    return {
      type: "HourElapsed",
    };
  }

  private incrementTime(time: Time): Time {
    const increment = (x: number) => x + 1;
    const total_time = increment(time.hour) + time.day * 24;
    const hour = total_time % 24;
    const day = this.math.floor(total_time / 24);

    return {
      hour,
      day,
    };
  }

  apply(state: GameState, event: GameEvent): GameState {
    // Pure function
    const next = this.step(state, event);
    logTransition(state, event, next);
    return next;
  }

  private step(state: GameState, event: GameEvent): GameState {
    switch (event.type) {
      case "HourElapsed":
        const time = this.incrementTime({
          day: state.day,
          hour: state.hour,
        });

        const drain = (s: SoldierState): SoldierState =>
          s.status === "active"
            ? {
                ...s,
                stamina: this.math.clamp(s.stamina - CONFIG.DRAIN_RATE, 0, 100),
              }
            : s;

        const recover = (s: SoldierState): SoldierState =>
          s.status === "rest"
            ? {
                ...s,
                stamina: this.math.clamp(
                  s.stamina + CONFIG.RECOVERY_RATE,
                  0,
                  100
                ),
              }
            : s;

        const new_roster = state.roster.map(drain).map(recover);

        return { ...state, ...time, roster: new_roster };

      default:
        // This ensures exhaustiveness
        const _exhaustive: never = event.type;
        return state;
    }
  }

  start(): void {
    // TODO: this should be runtime agnostic, so it fits in GODOT
    setInterval(() => {
      const event = this.tick();
      this.store.dispatch(event);
    }, 1000);
  }
}

export { Engine };
