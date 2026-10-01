# P8: Shared state and data

**Build:** a coin counter shared across two scenes.
1. Create `src/game_state.ts`:
   ```ts
   export class GameState extends Node {
     coins: int = 0;
     coins_changed = gd.signal<[value: int]>();

     add_coin(): void {
       this.coins += 1;
       this.coins_changed.emit(this.coins);
     }
   }
   ```
   Register the generated `game_state.gd` in Project Settings > Globals > Autoload with the name `GameState`. If the editor doesn't know the global yet, keep `tstogd watch` running so the typings refresh.
2. Make `scene_a.tscn` and `scene_b.tscn`, each with a button and a label. Each scene's script calls `GameState.add_coin()` on the button, and listens to `GameState.coins_changed` to update the label (connect in code).
3. Add a button that switches scene: `this.get_tree().change_scene_to_file('res://scene_b.tscn');`. The count must survive the switch.
4. **Custom resource.** `src/level_data.ts`:
   ```ts
   export class LevelData extends Resource {
     @exports title: string = '';
     @exports target: int = 0;
   }
   ```
   After conversion: FileSystem > right-click > New Resource > `LevelData`, and save `level1.tres`. Load it with `const level = load('res://level1.tres');` and read `level.title`.
5. **Save and load.** In a script:
   ```ts
   const cfg = new ConfigFile();
   cfg.set_value('progress', 'coins', GameState.coins);
   cfg.save('user://save.cfg');
   ```
   On start, `cfg.load('user://save.cfg')` and `cfg.get_value('progress', 'coins', 0)`. (If `new ConfigFile()` surprises you, read the generated `.gd` to see what it became.)

**Learn:** autoloads, scene switching, custom `Resource` plus `@exports`, `ConfigFile`, the `user://` path.
**Done when:** coins persist across scene switches and across a full restart, and you edited `level1.tres` in the Inspector without touching code.

---
Previous: [P7](p07-tilemap-camera-pickup-hud.md) | [Index](README.md) | Next: [P9: Juice](p09-juice.md)
