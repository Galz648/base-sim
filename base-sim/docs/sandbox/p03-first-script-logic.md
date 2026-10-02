# P3: Your first script logic

**Build:** `Control` root, one `Button`, one `Label`.
1. In `src/scripts/p3.ts`:
   ```ts
   export class P3 extends Control {
     @onready label: Label = this.get_node('Label');
     @onready button: Button = this.get_node('Button');

     count: int = 0;

     _ready(): void {
       this.button.pressed.connect(this.on_pressed);
     }

     on_pressed(): void {
       this.count = clampi(this.count + 1, 0, 10);
       this.label.text = `Clicks: ${this.count}`;
     }
   }
   ```
2. Attach the generated `p3.gd` to the root, and press F5.
3. Open `p3.gd` and read how your TypeScript turned into GDScript: `@onready`, the signal connection, the string.

**Learn:** typed fields (`int`), `@onready`, `this.get_node()`, template strings, connecting a signal in code, reading generated `.gd`.
**Done when:** the counter stops at 10, and you can point at which line of the `.gd` came from which line of the `.ts`.

---
Previous: [P2](p02-scenes-as-building-blocks.md) | [Index](README.md) | Next: [P4: Signals](p04-signals.md)
