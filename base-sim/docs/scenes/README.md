# Game sketches (S1–S7)

Step 2 of the plan. Small playable scenes that feel like pieces of the game, built from the components you practised in the sandbox. They have goals, feedback and juice. **They have no deep simulation.** Nobody thinks for themselves. People follow your schedule and react to your choices with hand-tuned numbers, so you can spend your time on Godot and on how it feels.

All scripts are TypeScript for tstogd. Keep `npx tstogd watch` running, and keep the [cheat sheet](../sandbox/tstogd-cheatsheet.md) open. Put your `.ts` files under `src/`, and attach the generated `.gd` files in Godot.

## Rules without a simulation

Two scripts carry the rules. Create both once (see [P8](../sandbox/p08-shared-state-and-data.md)).

**`src/person.ts`**, a `Resource` you edit in the Inspector:

```ts
export class Person extends Resource {
  @exports display_name: string = '';
  @exports traits: Array<string> = [];                 // hidden: 'leader', 'angry', 'coward', ...
  @export_range(0, 1) hunger: float = 0.2;
  @export_range(0, 1) fatigue: float = 0.2;
  @export_range(0, 1) discipline: float = 0.8;
}
```

**`src/base.ts`**, an autoload registered as `Base`:

```ts
export class Base extends Node {
  people: Array<Person> = [];
  hour: float = 6.0;                  // in-game time of day, 0..24
  minutes_per_second: float = 10.0;   // how fast game time runs
  hour_changed = gd.signal<[hour: float]>();
  person_changed = gd.signal<[person: Person]>();

  _process(delta: float): void {
    this.hour = fmod(this.hour + (delta * this.minutes_per_second) / 60.0, 24.0);
    this.hour_changed.emit(this.hour);
  }
}
```

(Check the generated `.gd` for anything that surprises you, such as the typed `Array<Person>`.)

Rules are small and visible:

- **Time passes** in `Base._process`, wrapping at 24.
- **Needs drift by fixed amounts per game hour,** depending on the activity: eating lowers hunger, resting lowers fatigue, a night watch raises fatigue.
- **Discipline** drops when hunger or fatigue are high, and rises a bit after a good decision.
- **Effects are tables, not formulas.** An event choice says `{ discipline: -0.1, hunger: 0.0 }` and you add it.
- **Traits are hints,** shown only after you've talked to someone. A "coward" might just add a larger fatigue penalty on watch. No emergent behaviour is needed.

Edit the `.tres` files to retune. Different "days" (S7) can swap in different rosters and event lists.

## Game feel toolkit

Use these in every sketch. Add each one, then judge whether it feels better. In TypeScript they are the same Godot calls:

- **Ease, don't snap.** `const t = this.create_tween(); t.set_trans(Tween.TRANS_BACK); t.tween_property(node, 'scale', Vector2(1.2, 1.2), 0.15);`
- **Screen shake.** Tween `Camera2D.offset` to random values for 0.2 s with a decaying amplitude.
- **Squash and stretch.** On a click or a pickup, tween `scale` to 1.2 and back.
- **Hit-stop.** `Engine.time_scale = 0.05` for 0.05 s on a big moment. Restore it with `await this.get_tree().create_timer(0.05, true, false, true).timeout`.
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

Suggested order: S1, S2, S3 (need P0–P8), S4, S5, S6, then S7 to tie them together.

[Back to README](../../README.md)
