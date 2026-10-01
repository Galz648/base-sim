# S3: Clock and schedule board

A day clock with a day-night tint, and a board where you drag activity blocks into time slots. In S2 the people wander randomly. Here they follow what you put on the board.

**Components:** `CanvasModulate`, `Timer` or `_process`, `Label`, `GridContainer`, drag and drop on `Control` (`_get_drag_data`, `_can_drop_data`, `_drop_data`), `Tween`, `Resource`.

**Scene tree:**
```
S3 (Node2D or Control)
├── World (instance of S2)
├── CanvasModulate                       # tints the whole 2D world
└── HUD (CanvasLayer)
    ├── ClockLabel (Label)
    ├── SpeedButtons (HBoxContainer: Pause, 1x, 3x)
    └── ScheduleBoard (PanelContainer)
        └── GridContainer                # columns = number of slots
            ├── Slot × 24 or 8 (Control, script: slot.gd)
            └── Palette (HBoxContainer): Meal, Training, Rest, Watch, Maintenance
```

**Steps:**
1. **Clock:** in the `Base` autoload ([rules](README.md#rules-without-a-simulation)), advance `hour` each frame. `ClockLabel.text = "%02d:%02d" % [int(hour), int(fmod(hour, 1.0) * 60)]`. Speed buttons set `Engine.time_scale` or `minutes_per_second`.
2. **Day-night:** set `CanvasModulate.color` from the hour using a `Gradient` resource (night dark blue, noon white, evening orange). `Gradient.sample(hour / 24.0)`. Smooth it with a tween if you jump the time.
3. **Palette blocks:** each is a `Control` with a script whose `_get_drag_data(at)` returns `{"activity": "Meal"}` and calls `set_drag_preview()` with a small label.
4. **Slots:** `_can_drop_data(at, data)` returns true if `data` has `activity`. `_drop_data(at, data)` stores it in `Base.schedule[slot_index]` (a shared schedule for everyone, or per person) and shows the activity name with a squash tween.
5. **Following the schedule:** when `hour_changed` fires for a new slot, look up the activity, map it to a place (`Meal → MessHall`, `Rest → Barracks`, `Watch → Tower`) and call `go_to(place)` on each person from [S2](s2-base-map.md).
6. **Needs drift:** apply the small per-hour changes from the rules table: Meal lowers hunger, Rest lowers fatigue, Watch raises fatigue.
7. **Feel:** the current slot is highlighted and moves along with the clock. A thump sound and a quick scale pop on drop. Mess-hall activity triggers a bell. The tint fades smoothly through dusk.

**Done when:** you can rearrange the day on the board, watch the sun go down, and see people walk to the right place at the right time.

---
Previous: [S2](s2-base-map.md) | [Index](README.md) | Next: [S4: Event pop-ups](s4-event-popups.md)
