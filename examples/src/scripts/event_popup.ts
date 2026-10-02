import { EventData } from './event_data';

export class EventPopup extends PanelContainer {
  @onready title_label: Label = this.get_node('VBoxContainer/Title');
  @onready body_label: Label = this.get_node('VBoxContainer/Body');
  @onready choice: Button = this.get_node('VBoxContainer/Choice');

  event: EventData | null = null;

  _ready(): void {
    this.choice.pressed.connect(this.on_choice);
  }

  show_event(event: EventData): void {
    this.event = event;
    this.title_label.text = event.title;
    this.body_label.text = event.body;
  }

  on_choice(): void {
    if (this.event === null || Base.person === null) return;
    Base.person.fatigue = clampf(Base.person.fatigue + this.event.fatigue_change, 0.0, 1.0);
  }
}
