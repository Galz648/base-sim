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
├── People (Node2D)               # person.tscn instances
├── Camera2D
└── HUD (CanvasLayer) > card from S1
```
`person_body.tscn`: `CharacterBody2D` > `Sprite2D`, `CollisionShape2D`, `NavigationAgent2D`, `Area2D` (for clicks). Script has `@export var person: Person`.

**Steps:**
1. Paint the base with `TileMapLayer`s. In the TileSet, add a **Navigation Layer** to floor tiles and a **Physics Layer** to walls ([P7](../sandbox/p07-tilemap-camera-pickup-hud.md)). Walkable floor tiles get a navigation polygon.
2. Place `Marker2D`s for each place. Name them exactly as the places in the schedule (`MessHall`, ...).
3. In `person_body.gd`: `func go_to(place: String)` finds the marker (`get_tree().get_first_node_in_group("places")` and a lookup by name), then sets `nav_agent.target_position = marker.global_position`.
4. In `_physics_process`, `var next := nav_agent.get_next_path_position()`, `velocity = global_position.direction_to(next) * 60.0`, `move_and_slide()`. Stop when `nav_agent.is_navigation_finished()`.
5. A `Timer` every 5 seconds picks a random place for each person. (S3 replaces this with the real schedule.)
6. Click a person (`Area2D.input_event`) to load them into the S1 card. Highlight them with a ring sprite.
7. **Feel:** a little bob while walking (a tween on `Sprite2D.position.y`), dust particles at the feet, a smooth `Camera2D` that follows the selected person, a name tag above each head.

**Done when:** five people wander between places without walking through walls, and clicking one shows their card.

---
Previous: [S1](s1-person-card.md) | [Index](README.md) | Next: [S3: Clock and schedule board](s3-clock-and-schedule.md)
