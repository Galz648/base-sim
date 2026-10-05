import type { MathPort } from "../../sim/boundary";
import type { GameEvent, GameState, SoldierState } from "../sim/domain";

export class Sim {
  private math: MathPort;
  store: { state: GameState };

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
            id: 0,
            duration: 6,
            assigned: [],
            name: "Recon Patrol",
            requiredSolders: 2,
            status: "pending",
          },
        ],
        hour: 1,
        in_progress: [],
        completed: [],
      },
    };
  }

  apply(state: GameState, event: GameEvent): GameState {
    if (event.type != "HourElapsed") {
      return state;
    }

    const total_time = state.hour + 1 + state.day * 24;
    const hour = total_time % 24;
    const day = this.math.floor(total_time / 24);
    const roster: SoldierState[] = [];

    for (const s of state.roster) {
      let stamina = s.stamina;
      if (s.status == "active") {
        stamina = this.math.clamp(stamina - 1, 0, 100);
      } else if (s.status == "rest") {
        stamina = this.math.clamp(stamina + 1, 0, 100);
      }
      roster.append({
        id: s.id,
        name: s.name,
        health: s.health,
        stamina: stamina,
        status: s.status,
      });
    }

    return {
      ...state,
      day: day,
      hour: hour,
      missions: state.missions,
      roster: roster,
    };
  }
}
