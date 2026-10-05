import { MathPort } from "../../sim/boundary";
import { CONFIG } from "./config";
import {
  GameState,
  GameEvent,
  SoldierState,
  HourElapsedEvent,
  ActiveMission,
  CompletedMissionEvent,
} from "./domain";
import { logTransition } from "./utils";
type Store = {
  getState(): GameState;
  state: GameState;
  events: GameEvent[];
  dispatch(event: GameEvent): void;
  subscribe(cb: Callable): void;
};

type Time = { hour: number; day: number };

class Sim {
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
        missions: [
          {
            id: 1,
            duration: 6,
            assigned: [1],
            name: "Recon Patrol",
            requiredSolders: 1,
            status: "available",
          },
        ],
        hour: 1,
        in_progress: [
          {
            id: 2,
            remaining: 4,
            assigned: [1],
            name: "Night Watch",
          },
        ],
        completed: [{ id: 3, name: "Supply Run" }],
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
    logTransition(state, event, next); // TODO: This will not work under godot probably - move this somewhere else, possibly entrypoint.ts
    return next;
  }

  private step(state: GameState, event: GameEvent): GameState {
    switch (event.type) {
      case "HourElapsed":
        const time = this.incrementTime({
          day: state.day,
          hour: state.hour,
        });

        return {
          ...state,
          ...time,
          in_progress: state.in_progress.map((mission: ActiveMission) => ({
            ...mission,
            remaining: mission.remaining - 1,
          })),
        };

      case "MissionCompleted":
        // get the mission
        const mission = state.in_progress.find(
          (m) => m.id === event.mission_id
        );

        if (!mission) {
          throw new Error(`Mission with id ${event.mission_id} not found.`);
        }

        // get the soldier ids + modify the status of the soldier ids
        const updated_roster = state.roster.map(
          (s: SoldierState): SoldierState => {
            if (mission.assigned.includes(s.id) && s.status !== "injury") {
              // TODO: handle the case of injury on a task - note that it might not be assigned at this point
              return { ...s, status: "rest" }; // this will probably cause problems if one soldier returns injured from a task. status could be changed to "deployed" | "free", to avoid this.
            }
            return s;
          }
        );
        return {
          ...state,
          roster: updated_roster,
          in_progress: state.in_progress.filter(
            (m) => m.id !== event.mission_id
          ),
          completed: [
            ...state.completed,
            { id: event.mission_id, name: event.name },
          ],
        };

      default:
        // This ensures exhaustiveness
        const _exhaustive: never = event;
        return state;
    }
  }

  start(): void {
    // TODO: this should be runtime agnostic, so it fits in GODOT (so no SetInterval, should probably be wrapped in some Timer construct, to mimic Godot roughly)
    setInterval(() => {
      //NOTE: This should always run first.
      const event = this.tick();
      this.store.dispatch(event);
    }, 1000);

    setInterval(() => {
      const freshly_completed = this.store
        .getState()
        .in_progress.filter((active: ActiveMission) => active.remaining === 0);
      const completed_missions_events = freshly_completed.map(
        (mission: ActiveMission): CompletedMissionEvent => {
          return {
            type: "MissionCompleted",
            mission_id: mission.id,
            name: mission.name,
          };
        }
      );
      completed_missions_events.forEach((e: CompletedMissionEvent) =>
        this.store.dispatch(e)
      );
    }, 1000);
  }
}

export { Sim };
