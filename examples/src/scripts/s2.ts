import { PersonBody } from './person_body';

export class S2 extends Node2D {
  @onready person: PersonBody = this.get_node('Person');
  @onready place: Marker2D = this.get_node('Place');

  _ready(): void {
    this.person.go_to(this.place.global_position);
  }
}
