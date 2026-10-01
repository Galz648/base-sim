# P7: Tilemap, camera, pickup, HUD

**Build:** a bigger room from tiles.
1. Add a `TileMapLayer`. In the Inspector create a new `TileSet` (set tile size, for example 16×16). Open the TileSet bottom panel and drag in a tileset image.
2. In the TileSet, add a **Physics Layer**. Select the wall tiles in the TileSet editor and draw a collision polygon on them (Paint mode > Physics Layer 0).
3. Paint a floor and a wall ring in the TileMap bottom panel. Walls should now block your player from P6.
4. Add a `Camera2D` as a child of the player. Turn on `position_smoothing_enabled`.
5. Pickup: `Area2D` > `CollisionShape2D` + `Sprite2D`. Connect `body_entered(body)`. If `body` is in a `player` group, `queue_free()` the pickup and emit a signal.
6. HUD: `CanvasLayer` > `Label`. It stays fixed on screen while the camera moves. Update it from the pickup signal.

**Learn:** `TileSet`, `TileMapLayer`, tile physics, `Camera2D`, `Area2D`, `body_entered`, `CanvasLayer`, collision layers and masks.
**Done when:** the camera follows, walls from tiles block you, pickups disappear and the HUD counts them.

---
Previous: [P6: Move a character](p06-move-a-character.md) | [Index](README.md) | Next: [P8: Shared state and data](p08-shared-state-and-data.md)
