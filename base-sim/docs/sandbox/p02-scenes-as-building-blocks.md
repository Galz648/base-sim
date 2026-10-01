# P2: Scenes as building blocks

**Build:** `ball.tscn` (`Node2D` > `Sprite2D`) and `main.tscn` that instances it several times.
1. Make `ball.tscn` with a `Sprite2D` using the editor icon as texture. Write `src/ball.ts` and attach the generated `ball.gd` to the root:
   ```ts
   export class Ball extends Node2D {
     velocity: Vector2 = Vector2(randf_range(-200.0, 200.0), randf_range(-200.0, 200.0));

     _ready(): void {
       this.add_to_group('balls');
     }

     _process(delta: float): void {
       this.position = gd.ops.add(this.position, gd.ops.mul(this.velocity, delta));
       const size: Vector2 = this.get_viewport_rect().size;
       if (this.position.x < 0.0 || this.position.x > size.x) this.velocity.x = -this.velocity.x;
       if (this.position.y < 0.0 || this.position.y > size.y) this.velocity.y = -this.velocity.y;
     }
   }
   ```
2. In `main.tscn`, drag `ball.tscn` in 5 times (instancing in the editor).
3. Now spawn some from code. In `src/main.ts`:
   ```ts
   import { Ball } from './ball';

   export class Main extends Node2D {
     _ready(): void {
       for (let i = 0; i < 5; i++) {
         const ball = gd.as(preload('res://ball.tscn').instantiate(), Ball);
         if (ball === null) continue;
         ball.position = Vector2(randf_range(0.0, 600.0), randf_range(0.0, 400.0));
         this.add_child(ball);
       }
       print(this.get_tree().get_nodes_in_group('balls').size());
     }
   }
   ```
   (Imports use the TypeScript path, like `./ball`. The preload path is the Godot path.)

**Learn:** saving a branch as a scene, instancing in the editor and in code, `_ready()` versus `_process()`, groups, `gd.as` for typed nodes, vector maths with `gd.ops`.
**Done when:** 5 editor-placed and 5 code-spawned balls bounce independently and the group count prints 10.

---
Previous: [P1](p01-editor-tour.md) | [Index](README.md) | Next: [P3: Your first script logic](p03-first-script-logic.md)
