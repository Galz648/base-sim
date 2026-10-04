import { Engine } from "../engine/engine";

export default class GameRoot extends Node {
  private engine = new Engine({ floor: floor, clamp: clamp });
  private state = this.engine.store.state;

  _ready(): void {
    const timer = new Timer();
    timer.wait_time = 1.0;
    timer.autostart = true;
    timer.timeout.connect(this._on_tick);
    this.add_child(timer);
  }

  _on_tick(): void {
    this.state = this.engine.apply(this.state, { type: "HourElapsed" });
    print(this.state.hour);
  }
}
