export class P1 extends Node2D {
  @onready label: Label = this.get_node('Label');

  _process(delta: float): void {
    this.label.position.x += delta * 60.0;
    const width: float = this.get_viewport_rect().size.x;
    if (this.label.position.x > width) this.label.position.x = 0.0;
  }
}
