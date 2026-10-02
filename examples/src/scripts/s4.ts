import { EventData } from './event_data';
import { EventPopup } from './event_popup';
import { Person } from './person';

export class S4 extends Control {
  @onready popup: EventPopup = this.get_node('EventPopup');
  @onready timer: Timer = this.get_node('Timer');

  _ready(): void {
    const person = gd.as(load('res://src/resources/dana.tres'), Person);
    if (person !== null) Base.person = person;
    this.timer.timeout.connect(this.on_timeout);
    this.timer.one_shot = true;
    this.timer.wait_time = 2.0;
    this.timer.start();
  }

  on_timeout(): void {
    const event = gd.as(load('res://src/resources/cold_shower.tres'), EventData);
    if (event === null) return;
    this.popup.show_event(event);
  }
}
