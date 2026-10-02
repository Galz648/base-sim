export class PersonBody extends CharacterBody2D {
  target: Vector2 = Vector2.ZERO;
  moving: bool = false;

  go_to(target: Vector2): void {
    this.target = target;
    this.moving = true;
  }

  _physics_process(_delta: float): void {
    if (!this.moving) return;
    if (this.global_position.distance_to(this.target) < 4.0) {
      this.moving = false;
      return;
    }
    this.velocity = gd.ops.mul(this.global_position.direction_to(this.target), 60.0);
    this.move_and_slide();
  }
}
