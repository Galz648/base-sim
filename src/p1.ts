export class Enemy extends CharacterBody2D {
    /** Pixels per second. */
    @exports speed: float = 80.0;
    target: Node2D | null = null;
  
    _physics_process(delta: float) {
      // Stand still until there is something to chase.
      if (this.target === null) {
        return;
      }
      let direction = this.global_position.direction_to(
        this.target.global_position,
      );
      this.velocity = gd.ops.mul(direction, this.speed);
      this.move_and_slide();
    }
  
    chase(node: Node2D) {
      this.target = node;
    }
  }
