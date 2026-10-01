# P2: Scenes as building blocks

**Build:** `ball.tscn` (`Node2D` > `Sprite2D`) and `main.tscn` that instances it several times.
1. Make `ball.tscn` with `Sprite2D` using the editor icon as texture. Give it a script with `var velocity := Vector2(randf_range(-200, 200), randf_range(-200, 200))`.
2. In `_process(delta)`, add `velocity * delta` to `position`. If `position` leaves `get_viewport_rect()`, flip the matching velocity component.
3. In `main.tscn`, drag `ball.tscn` in 5 times (instancing). Then do it in code: in `main.gd` `_ready()`, `preload("res://ball.tscn").instantiate()`, set `position`, `add_child()`.
4. In `ball.gd` `_ready()`, call `add_to_group("balls")`. In `main.gd`, print `get_tree().get_nodes_in_group("balls").size()`.

**Learn:** saving a branch as a scene, instancing in the editor and in code, `_ready()` vs `_process()`, groups.
**Done when:** 5 editor-placed and 5 code-spawned balls bounce independently and the group count prints 10.

---
Previous: [P1: Editor tour](p01-editor-tour.md) | [Index](README.md) | Next: [P3: GDScript basics](p03-gdscript-basics.md)
