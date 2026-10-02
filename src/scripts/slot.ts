export class Slot extends Label {
  _can_drop_data(_at_position: Vector2, _data: unknown): bool {
    return true;
  }

  _drop_data(_at_position: Vector2, data: unknown): void {
    this.text = str(data);
  }
}
