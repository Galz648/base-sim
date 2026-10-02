export class Player extends CharacterBody2D {
  @exports speed: float = 120.0;

  _physics_process(delta: float): void {
    const direction: Vector2 = Input.get_vector('move_left', 'move_right', 'move_up', 'move_down');
    this.velocity = gd.ops.mul(direction, this.speed);
    this.move_and_slide();
  }
}
