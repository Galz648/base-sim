# P6: Move a character

**Build:** `Node2D` room with `StaticBody2D` walls and a `CharacterBody2D` player.
1. Player: `CharacterBody2D` > `Sprite2D` + `CollisionShape2D` (a `RectangleShape2D` the size of the sprite).
2. Project Settings > Input Map: add actions `move_left`, `move_right`, `move_up`, `move_down` (bind WASD and arrows).
3. In `src/player.ts`, attach the generated `player.gd` to the player:
   ```ts
   export class Player extends CharacterBody2D {
     @exports speed: float = 120.0;

     _physics_process(delta: float): void {
       const direction: Vector2 = Input.get_vector('move_left', 'move_right', 'move_up', 'move_down');
       this.velocity = gd.ops.mul(direction, this.speed);
       this.move_and_slide();
     }
   }
   ```
4. Walls: four `StaticBody2D` nodes, each with a `CollisionShape2D` and a `ColorRect` or `Sprite2D` to see them.
5. Change `speed` in the Inspector (it is exported) while the game runs, and watch the effect.

**Learn:** `CharacterBody2D`, collision shapes, `move_and_slide()`, Input Map actions, `_physics_process`, `@exports`.
**Done when:** the player moves diagonally at the same speed as straight and cannot leave the room.

---
Previous: [P5](p05-ui-playground.md) | [Index](README.md) | Next: [P7: Tilemap, camera, pickup, HUD](p07-tilemap-camera-pickup-hud.md)
