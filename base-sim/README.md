# Base Sim (Godot variant, TypeScript scripts)

A Godot take on [base-sim](../README.md): you run a base on the border between your country and the enemy's. Stopping crossings is half the job. The other half is the people: their food, rest, discipline and morale decide whether the base holds.

This folder is a playground plan, not a finished game. You learn Godot's components in small exercises, then build simple scenes with a real game feel. **There is no deep simulation.** There is no emergent AI and no social model. Rules are plain numbers and `Resource` files you edit by hand. Assumes Godot 4.3 or later.

**Scripts are written in TypeScript, not GDScript.** You write `.ts` files and [tstogd](https://github.com/nnn3d/typescript-to-gdscript) (typescript-to-gdscript) turns them into ordinary `.gd` files that Godot runs. All code in these docs is TypeScript for tstogd. You still use Godot's API and semantics (snake_case names, nodes, signals). TypeScript is only the syntax.

## How to start

1. **Install** [Godot 4.3+](https://godotengine.org/download) (the standard build, not .NET) and Node.js 22+.
2. **Create the sandbox project.** Make a folder `sandbox/` inside this folder, open Godot, choose Import / New Project and point it there. The *Compatibility* renderer is fine for 2D.
3. **Do [P0: tstogd setup](docs/sandbox/p00-tstogd-setup.md).** It installs the converter and makes your first script run. Keep the [cheat sheet](docs/sandbox/tstogd-cheatsheet.md) open while you work.
4. **Do [P1: Editor tour](docs/sandbox/p01-editor-tour.md).** Then follow the Next link at the bottom of each page.
5. **Before building the sketches,** pass the exit check in the [components index](docs/sandbox/README.md).

## Where to go

```
README.md                      you are here
docs/
  sandbox/                     P0-P10: Godot components, no game
    README.md                  index, project settings, exit check
    p00-tstogd-setup.md        install and workflow
    tstogd-cheatsheet.md       GDScript -> tstogd, side by side
  scenes/                      S1-S7: simple scenes with game feel
    README.md                  index, how the rules work, feel toolkit
```

| You are... | Open |
|------------|------|
| New to Godot | [Components index](docs/sandbox/README.md), then P0 |
| Unsure how to write something in TypeScript | [Cheat sheet](docs/sandbox/tstogd-cheatsheet.md) |
| Done with the components | [Game sketches index](docs/scenes/README.md), then S1 |
| Wondering how the game works with no sim | [Rules without a simulation](docs/scenes/README.md#rules-without-a-simulation) |
| Lost | Come back to this page |

Each page ends with Previous / Index / Next links.

## The game idea, kept

- **The people.** A fixed roster, each with hunger, fatigue, discipline and hidden traits (S1).
- **The base.** A top-down base where people walk to places on a schedule (S2, S3).
- **Events.** Car breakdowns, high winds, cold showers, infiltration attempts: pop-ups that need a decision (S4).
- **Talking.** Walk up to someone, talk, and learn who they are (S5).
- **The border.** Staff the watch, and tired guards miss things (S6).
- **A day.** Schedule it, survive it, see how the base fared (S7).

The source README also describes a first-person view. That is an optional 3D detour at the end of the sketches.

## Open questions

- Top-down only, or first-person too? A first-person view means learning Godot's 3D nodes.
- How many people on the roster? It affects how much the UI has to show.
- Does the schedule board replace direct orders, or sit beside them?
