import { Person } from './person';

export class Day extends Control {
  @onready clock: Label = this.get_node('ClockLabel');
  @onready end_label: Label = this.get_node('EndLabel');

  ended: bool = false;

  _ready(): void {
    const person = gd.as(load('res://src/resources/dana.tres'), Person);
    if (person !== null) Base.person = person;
    Base.hour = 6.0;
    Base.hour_changed.connect(this.on_hour);
  }

  on_hour(hour: float): void {
    if (this.ended) return;
    this.clock.text = `${floori(hour)}`;
    if (hour < 22.0) return;
    this.ended = true;
    const fatigue: float = Base.person === null ? 0.0 : Base.person.fatigue;
    this.end_label.text = `Day over. Fatigue ${fatigue}`;
  }
}
