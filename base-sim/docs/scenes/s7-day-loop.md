# S7: A day at the base

Tie the sketches into one short loop: set the schedule, run the day, handle events, and see a report at the end. There is still no simulation. It is the sketches working together.

**Components:** `PackedScene` (instancing S2–S6 as sub-scenes), signals, `Timer`, `Control`, `Tween`, `ConfigFile`, `change_scene_to_packed()`.

**Files:**
```
day.tscn             world (S2) + clock and board (S3) + events (S4) + watch (S6) + HUD
planning.tscn        schedule board only, shown before the day starts
report.tscn          end-of-day report
rosters/*.tres       DayData resources
```

**Steps:**
1. **`DayData`** (`Resource`): `@export var title: String`, `@export var people: Array[Person]`, `@export var events: Array[EventData]`, `@export var attempts: int` (how many infiltrations), `@export var length_hours: float`. Make a calm day and a hard day.
2. **Planning screen:** shows the [S3](s3-clock-and-schedule.md) schedule board and each person's card. A "Start day" button loads `day.tscn`.
3. **Run the day:** the clock runs from 06:00 to 22:00 (or `length_hours`). S4 events and S6 attempts fire from the day's lists. S5 conversations are available as the player walks around.
4. **Counters:** the `Base` autoload keeps `breaches`, `catches`, `events_handled`. Each is incremented by signals from S4 and S6.
5. **End of day:** when the clock reaches the end, show `report.tscn` with the counters, the average of the people's three bars, and the biggest problem ("Yossi: fatigue 0.9").
6. **Score:** one line of hand-made maths, for example `score = catches * 10 - breaches * 25 + round(avg_discipline * 20)`. Show the number counting up with a tween.
7. **Save:** a `ConfigFile` stores the best score per day file, and the planning screen shows it.
8. **Transitions:** a fade-to-black `ColorRect` between planning, day and report.
9. **Feel:** a morning "Day starts" banner, an evening bell, a calm ambient loop that turns tense when an external event is active, and an end-of-day freeze-frame before the report slides in.

**Done when:** you can plan a day, play it through, get events and a border attempt, see your score and a short report, retry, and your best score survives a restart.

---
Previous: [S6](s6-border-watch.md) | [Index](README.md)
