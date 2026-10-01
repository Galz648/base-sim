# S3: Clock and schedule board

A day clock with a day-night tint, and a board where you drag activity blocks into time slots. In S2 the people wander randomly. Here they follow what you put on the board.

**Components:** `CanvasModulate`, `Label`, `GridContainer`, drag and drop on `Control` (`_get_drag_data`, `_can_drop_data`, `_drop_data`), `Gradient`, `Tween`.

**Scene tree:**
```
S3 (Node2D)
├── World (instance of S2)
├── CanvasModulate                       # tints the whole 2D world
└── HUD (CanvasLayer)
    ├── ClockLabel (Label)
    ├── SpeedButtons (HBoxContainer: Pause, 1x, 3x)
    └── ScheduleBoard (PanelContainer)
        └── GridContainer                # columns = number of slots
            ├── Slot × 8 (Control, script: slot)
            └── Palette (HBoxContainer): Meal, Training, Rest, Watch, Maintenance
```

**Steps:**
1. **Clock:** `Base` (see [the rules](README.md#rules-without-a-simulation)) advances `hour` each frame. In a HUD script, connect to `Base.hour_changed` and write the time into `ClockLabel.text`. Compute the whole hours (`floori(hour)`) and the minutes (`floori(fmod(hour, 1.0) * 60.0)`), and pad the minutes with a leading zero. Check the generated `.gd` to see how your string building converted. Speed buttons set `Base.minutes_per_second`.
2. **Day-night:** a `Gradient` resource (night dark blue, noon white, evening orange) exported on the script: `@exports tint: Gradient | null = null;`. On each hour change: `this.canvas_modulate.color = this.tint.sample(hour / 24.0);`.
3. **Palette blocks:** each is a `Control` whose script defines `_get_drag_data(at_position: Vector2)`. It returns a dictionary with the activity name, and calls `this.set_drag_preview(...)` with a small label. (How a TypeScript object literal becomes a `Dictionary` is worth checking in the generated `.gd`.)
4. **Slots:** `_can_drop_data(at_position, data)` returns true if `data` has an `activity`. `_drop_data(at_position, data)` stores it in the schedule (a shared schedule for everyone, or per person) and shows the name with a squash tween.
5. **Following the schedule:** when `Base.hour_changed` crosses into a new slot, look up the activity, map it to a place (`Meal → MessHall`, `Rest → Barracks`, `Watch → Tower`) and call `go_to(place)` on each `PersonBody` from [S2](s2-base-map.md).
6. **Needs drift:** apply the small per-hour changes from the rules table: Meal lowers hunger, Rest lowers fatigue, Watch raises fatigue.
7. **Feel:** the current slot is highlighted and moves along with the clock. A thump sound and a quick scale pop on drop. Mess-hall activity triggers a bell. The tint fades smoothly through dusk.

**Done when:** you can rearrange the day on the board, watch the sun go down, and see people walk to the right place at the right time.

---
Previous: [S2](s2-base-map.md) | [Index](README.md) | Next: [S4: Event pop-ups](s4-event-popups.md)
