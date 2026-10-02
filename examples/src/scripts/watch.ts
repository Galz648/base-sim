import { Person } from './person';

export class Watch extends Node2D {
  @onready sweep: Node2D = this.get_node('Sweep');
  @onready walker: PathFollow2D = this.get_node('Path/Walker');
  @onready notice: Timer = this.get_node('Notice');
  @onready cone: Area2D = this.get_node('Sweep/Cone');

  caught: bool = false;

  _ready(): void {
    const person = gd.as(load('res://src/resources/dana.tres'), Person);
    if (person !== null) Base.person = person;
    const t = this.create_tween();
    t.set_loops();
    t.tween_property(this.sweep, 'rotation', 0.6, 4.0);
    t.tween_property(this.sweep, 'rotation', -0.6, 4.0);
    this.cone.area_entered.connect(this.on_area_entered);
    this.notice.timeout.connect(this.on_notice);
    this.notice.one_shot = true;
  }

  on_area_entered(_area: Area2D): void {
    const fatigue: float = Base.person === null ? 0.0 : Base.person.fatigue;
    this.notice.wait_time = lerpf(0.4, 2.5, fatigue);
    this.notice.start();
  }

  on_notice(): void {
    this.caught = true;
  }

  _process(delta: float): void {
    if (this.caught) return;
    this.walker.progress += 40.0 * delta;
  }
}
