# Game sketches (S1–S7)

Step 2 of the plan. Small playable scenes that feel like pieces of the game, built from the components you practised in the sandbox. They have goals, feedback and juice. **They have no deep simulation.** Nobody thinks for themselves. People follow your schedule and react to your choices with hand-tuned numbers, so you can spend your time on Godot and on how it feels.

## Rules without a simulation

Create one autoload (see [P8](../sandbox/p08-shared-state-and-data.md)): `base.gd`, registered as `Base`.

```
var people: Array[Person]     # the fixed roster (Person is a Resource, see S1)
var hour := 6.0               # in-game time of day, 0..24
var minutes_per_second := 10  # how fast game time runs
signal hour_changed(hour: float)
signal person_changed(person: Person)
```

`Person` is a custom `Resource` (`class_name Person`) with:

```
@export var display_name: String
@export var traits: Array[String]        # hidden: "leader", "angry", "coward", ...
@export_range(0, 1) var hunger := 0.2
@export_range(0, 1) var fatigue := 0.2
@export_range(0, 1) var discipline := 0.8
@export var schedule: Dictionary         # hour -> place name
```

Rules are small and visible:

- **Time passes:** `hour += delta * minutes_per_second / 60.0`, wrapping at 24.
- **Needs drift by fixed amounts per game hour,** depending on the activity: eating lowers hunger, resting lowers fatigue, a night watch raises fatigue.
- **Discipline** drops when hunger or fatigue are high, and rises a bit after a good decision.
- **Effects are tables, not formulas.** An event choice says `{"discipline": -0.1, "hunger": 0.0}` and you add it.
- **Traits are hints,** shown only after you've talked to someone. A "coward" might just add a larger fatigue penalty on watch. No emergent behaviour is needed.

Edit the `.tres` files to retune. Different "days" (S7) can swap in different rosters and event lists.

## Game feel toolkit

Use these in every sketch. Add each one, then judge whether it feels better.

- **Ease, don't snap.** `Tween` with `set_trans(TRANS_BACK)` or `set_ease(EASE_OUT)` for bars, popups and cards.
- **Screen shake.** Randomise `Camera2D.offset` for 0.2 s with a decaying amplitude.
- **Squash and stretch.** On a click or a pickup, tween `scale` to 1.2 and back.
- **Hit-stop.** `Engine.time_scale = 0.05` for 0.05 s on a big moment.
- **Particles on events.** One-shot `CPUParticles2D` bursts.
- **Sound.** `AudioStreamPlayer` for clicks, alerts, a rising alarm and a calm ambient loop.
- **Text with rhythm.** Typewriter effect on `RichTextLabel` with `visible_ratio`.
- **Never change a number without a visible reaction.**

## Sketches

1. [S1: Person card](s1-person-card.md): a card with bars that react to mood and tiredness.
2. [S2: Base map](s2-base-map.md): a top-down base where people wander between places.
3. [S3: Clock and schedule board](s3-clock-and-schedule.md): a day clock, a day-night tint and a drag-and-drop schedule.
4. [S4: Event pop-ups](s4-event-popups.md): events that need a decision, from resource files.
5. [S5: Conversation](s5-conversation.md): talk to a person, get a typewriter line and choices.
6. [S6: Border watch](s6-border-watch.md): a searchlight, a guard and an infiltration attempt.
7. [S7: A day at the base](s7-day-loop.md): ties it all together with a results screen.

Optional afterwards: a first-person walk-around in 3D (`CharacterBody3D`, `Camera3D`, `RayCast3D`). It is not covered here.

Suggested order: S1, S2, S3 (need P1–P8), S4, S5, S6, then S7 to tie them together.

[Back to README](../../README.md)
