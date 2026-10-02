import { Person } from './person';
import { PersonCard } from './person_card';

export class S1 extends Control {
  @onready card: PersonCard = this.get_node('Card');

  _ready(): void {
    const person = gd.as(load('res://src/resources/dana.tres'), Person);
    if (person === null) return;
    Base.person = person;
    this.card.show_person(person);
  }
}
