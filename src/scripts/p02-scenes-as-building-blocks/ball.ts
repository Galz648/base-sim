export class Ball extends Node2D {
  velocity: Vector2 = Vector2(80.0, 60.0);

  _process(delta: float): void {
    this.position = gd.ops.add(this.position, gd.ops.mul(this.velocity, delta));
    const size: Vector2 = this.get_viewport_rect().size;
    if (this.position.x < 0.0 || this.position.x > size.x) this.velocity.x = -this.velocity.x;
    if (this.position.y < 0.0 || this.position.y > size.y) this.velocity.y = -this.velocity.y;
  }
}
