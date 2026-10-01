# S6: Border watch

The core threat. A strip of border, a sweeping searchlight, a guard in a tower and someone trying to sneak across. A tired guard is slower to notice.

**Components:** `Node2D`, `PointLight2D` (or a cone drawn with `Polygon2D`), `Area2D`, `CollisionPolygon2D`, `Path2D` + `PathFollow2D`, `Timer`, `Tween`, `Camera2D`, `CanvasModulate`.

**Scene tree:**
```
S6 (Node2D)
├── Ground (ColorRect or TileMapLayer)
├── BorderLine (Line2D)
├── Tower (Node2D, script: tower)
│   ├── Sprite2D
│   ├── Light (PointLight2D)
│   └── Sweep (Node2D, rotates) > Cone (Area2D) > CollisionPolygon2D + Polygon2D
├── Infiltrators (Node2D)
│   └── Path (Path2D) > Walker (PathFollow2D, script: walker) > Sprite2D, Detected (Area2D)
├── CanvasModulate                 # dark night
└── HUD (CanvasLayer) > guard Card (from S1), AlertLabel
```

**Steps:**
1. Night scene: `CanvasModulate` dark blue. The tower's `PointLight2D` lights the ground in a cone.
2. `Sweep` rotates back and forth: a looping tween on `rotation` between two angles, 4 seconds each way, with `Tween.TRANS_SINE`. In `src/tower.ts`:
   ```ts
   export class Tower extends Node2D {
     @onready sweep: Node2D = this.get_node('Sweep');
     @exports guard: Person | null = null;

     _ready(): void {
       const t = this.create_tween();
       t.set_loops();
       t.set_trans(Tween.TRANS_SINE);
       t.tween_property(this.sweep, 'rotation', 0.6, 4.0);
       t.tween_property(this.sweep, 'rotation', -0.6, 4.0);
     }

     notice_delay(): float {
       if (this.guard === null) return 1.0;
       return lerpf(0.4, 2.5, this.guard.fatigue);
     }
   }
   ```
3. The `Cone` `Area2D` detects bodies or areas on the infiltrator layer. Entering the cone starts a **notice timer** with `this.notice_delay()` seconds.
4. **Alertness from fatigue:** a tired guard (fatigue near 1) takes two and a half seconds to notice, an alert one under half a second. Drive `guard.fatigue` from the S1 card, so scolding or resting changes the outcome.
5. **Infiltrator:** a `PathFollow2D` walks along a `Path2D` from the enemy side toward the border. Make a `Timer` start a new attempt every 15 seconds on a random path, and move it in `_process`: `this.progress += this.speed * delta;`.
6. **Outcomes:** if the guard notices before the walker crosses the border line, the walker is caught: flash the cone red, siren, freeze the walker, hit-stop 0.05 s. If the walker crosses first, show a red "Breach!" banner and shake the camera. Signal the result: `caught = gd.signal<[]>()` and `breached = gd.signal<[]>()` on the tower, so S7 can count them.
7. **Feel:** the cone light flickers a little. A subtle heartbeat or rising tension sound as a walker nears the line. Each outcome has a distinct sound. The guard's card bars show the fatigue effect live.

**Done when:** you can see the tower sweep, watch a walker approach, and see that a rested guard catches it while a tired guard misses it.

---
Previous: [S5](s5-conversation.md) | [Index](README.md) | Next: [S7: A day at the base](s7-day-loop.md)
