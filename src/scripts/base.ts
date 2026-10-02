import { Person } from './person';

export class BaseState extends Node {
  person: Person | null = null;
  hour: float = 6.0;
  hour_changed = gd.signal<[hour: float]>();

  _process(delta: float): void {
    this.hour = fmod(this.hour + delta, 24.0);
    this.hour_changed.emit(this.hour);
  }
}
