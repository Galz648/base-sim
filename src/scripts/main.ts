import { Sim } from "../sim/sim";

export default class GameRoot extends Node {
  private sim = new Sim({ floor: floor, clamp: clamp });
  private state = this.sim.store.state;

  _ready(): void {
    const timer = new Timer();
    timer.wait_time = 1.0;
    timer.autostart = true;
    timer.timeout.connect(this._on_tick);
    this.add_child(timer);
  }

  _on_tick(): void {
    this.state = this.sim.apply(this.state, { type: "HourElapsed" });
    print(this.state.hour);
  }
}
