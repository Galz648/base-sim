# S2: Base map

A top-down base with a few places (mess hall, barracks, watchtower, motor pool). People walk between them by themselves. Click one to see their card.

**Components:** `TileMapLayer`, `TileSet`, `NavigationRegion2D`, `NavigationAgent2D`, `CharacterBody2D`, `Area2D`, `Camera2D`, `Marker2D`, `Timer`.

**Scene tree:**
```
S2 (Node2D)
├── Floor (TileMapLayer)
├── Walls (TileMapLayer, physics + navigation layers)
├── Places (Node2D)
│   ├── MessHall (Marker2D)
│   ├── Barracks (Marker2D)
│   ├── Tower (Marker2D)
│   └── MotorPool (Marker2D)
├── NavigationRegion2D
├── People (Node2D)               # person_body.tscn instances
├── Camera2D
└── HUD (CanvasLayer) > card from S1
```
`person_body.tscn`: `CharacterBody2D` > `Sprite2D`, `CollisionShape2D`, `NavigationAgent2D`, `Area2D` (for clicks).

**Steps:**
1. Paint the base with `TileMapLayer`s. In the TileSet, add a **Navigation Layer** to floor tiles and a **Physics Layer** to walls ([P7](../sandbox/p07-tilemap-camera-pickup-hud.md)). Walkable floor tiles get a navigation polygon.
2. Place `Marker2D`s for each place and add them all to a group named `places` (Node dock > Groups). Name them exactly as the places in the schedule (`MessHall`, ...).
3. Write `src/person_body.ts`:
   ```ts
   export class PersonBody extends CharacterBody2D {
     @exports person: Person | null = null;
     @onready nav: NavigationAgent2D = this.get_node('NavigationAgent2D');

     go_to(place: string): void {
       for (const marker of this.get_tree().get_nodes_in_group('places')) {
         if (marker.name === place) {
           this.nav.target_position = gd.as(marker, Node2D)!.global_position;
         }
       }
     }

     _physics_process(delta: float): void {
       if (this.nav.is_navigation_finished()) return;
       const next: Vector2 = this.nav.get_next_path_position();
       this.velocity = gd.ops.mul(this.global_position.direction_to(next), 60.0);
       this.move_and_slide();
     }
   }
   ```
   (If a construct such as `marker.name === place` or `!` doesn't convert, read the error and the generated `.gd`, then adjust. The tstogd [caveats](https://nnn3d.github.io/typescript-to-gdscript/guide/caveats/) page lists what GDScript can't express.)
4. A `Timer` every 5 seconds in the map script picks a random place for each person and calls `go_to`. (S3 replaces this with the real schedule.)
5. Click a person (`Area2D.input_event`) to call `show_person` on the S1 card. Highlight them with a ring sprite.
6. **Feel:** a little bob while walking (a tween on `Sprite2D.position.y`), dust particles at the feet, a smooth `Camera2D` that follows the selected person, a name tag above each head.

**Done when:** five people wander between places without walking through walls, and clicking one shows their card.

---
Previous: [S1](s1-person-card.md) | [Index](README.md) | Next: [S3: Clock and schedule board](s3-clock-and-schedule.md)
