# P3: Your first script logic

**Build:** `Control` root, a `Button` and a `Label`.
1. In `src/p3.ts`:
   ```ts
   export class P3 extends Control {
     @onready label: Label = this.get_node('Label');
     @onready button: Button = this.get_node('Button');

     count: int = 0;

     _ready(): void {
       this.button.pressed.connect(this.on_pressed);
     }

     on_pressed(): void {
       this.count = this.clamp_count(this.count + 1, 0, 10);
       this.label.text = `Clicks: ${this.count}`;
     }

     clamp_count(v: int, lo: int, hi: int): int {
       return clampi(v, lo, hi);
     }
   }
   ```
2. Attach the generated `p3.gd` to the root, and press F5.
3. Open the Debugger panel while the game runs, and use the Remote tab in the Scene dock to watch `count` change on the live tree.
4. Put a breakpoint (click the gutter in Godot's script editor, on the generated `.gd`) in `on_pressed` and step through it.
5. Open `p3.gd` and read how your TypeScript turned into GDScript: `@onready`, the signal connection, the string.

**Learn:** typed fields (`int`, `float`), methods with types, `@onready`, `this.get_node()`, template strings, connecting a signal in code, the debugger, the remote scene tree, reading generated `.gd`.
**Done when:** the counter stops at 10, you inspected it live in the remote tree, and you can point at which line of the `.gd` came from which line of the `.ts`.

---
Previous: [P2](p02-scenes-as-building-blocks.md) | [Index](README.md) | Next: [P4: Signals](p04-signals.md)
