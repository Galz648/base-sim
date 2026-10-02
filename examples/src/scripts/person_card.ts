import { Person } from './person';

export class PersonCard extends PanelContainer {
  @onready name_label: Label = this.get_node('VBoxContainer/NameLabel');
  @onready bar: ProgressBar = this.get_node('VBoxContainer/FatigueBar');
  @onready rest: Button = this.get_node('VBoxContainer/RestButton');

  person: Person | null = null;

  _ready(): void {
    this.rest.pressed.connect(this.on_rest);
  }

  show_person(p: Person): void {
    this.person = p;
    this.name_label.text = p.display_name;
    this.refresh();
  }

  on_rest(): void {
    if (this.person === null) return;
    this.person.fatigue = clampf(this.person.fatigue - 0.3, 0.0, 1.0);
    this.refresh();
  }

  refresh(): void {
    if (this.person === null) return;
    const t = this.create_tween();
    t.tween_property(this.bar, 'value', this.person.fatigue * 100.0, 0.3);
  }
}
