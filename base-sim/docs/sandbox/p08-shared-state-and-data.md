# P8: Shared state and data

**Build:** a coin counter shared across two scenes.
1. Create `game_state.gd` with `var coins := 0` and `signal coins_changed(value: int)`. Register it in Project Settings > Globals > Autoload with the name `GameState`.
2. Make `scene_a.tscn` and `scene_b.tscn`, each with a button that does `GameState.coins += 1` and `GameState.coins_changed.emit(GameState.coins)`, and a label that listens to the signal.
3. Add a button that calls `get_tree().change_scene_to_file("res://scene_b.tscn")`. The count must survive the switch.
4. Custom resource: `level_data.gd` with `class_name LevelData extends Resource` and `@export var title: String`, `@export var target: int`. Right-click in FileSystem > New Resource > `LevelData` and save `level1.tres`. Load it with `load("res://level1.tres")` and read the fields.
5. Save and load: `ConfigFile.new()`, `set_value("progress", "coins", GameState.coins)`, `save("user://save.cfg")`. On start, `load("user://save.cfg")` and `get_value(...)`.

**Learn:** autoloads, scene switching, custom `Resource` plus `@export`, `ConfigFile`, the `user://` path.
**Done when:** coins persist across scene switches and across a full restart, and you edited `level1.tres` in the Inspector without touching code.

---
Previous: [P7: Tilemap, camera, pickup, HUD](p07-tilemap-camera-pickup-hud.md) | [Index](README.md) | Next: [P9: Juice](p09-juice.md)
