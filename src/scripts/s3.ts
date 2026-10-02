export class S3 extends Control {
  @onready clock: Label = this.get_node('ClockLabel');

  _ready(): void {
    Base.hour_changed.connect(this.on_hour);
    this.on_hour(Base.hour);
  }

  on_hour(hour: float): void {
    this.clock.text = `${floori(hour)}`;
  }
}
