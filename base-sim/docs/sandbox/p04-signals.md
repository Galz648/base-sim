# P4: Signals

**Build:** `Control` root with `Button`, `HSlider`, `Timer` and `Label`, plus a small child scene with a custom signal.

**Important:** connect signals **in code**, not in the editor's Signals tab. The editor adds a handler stub to the `.gd`, and tstogd deletes it on the next conversion, so the connection would break. Code connections survive.

1. In `src/p4.ts`:
   ```ts
   export class P4 extends Control {
     @onready slider: HSlider = this.get_node('HSlider');
     @onready button: Button = this.get_node('Button');
     @onready timer: Timer = this.get_node('Timer');
     @onready label: Label = this.get_node('Label');

     ticks: int = 0;

     _ready(): void {
       this.slider.value_changed.connect(this.on_slider);
       this.button.pressed.connect(this.on_button);
       this.timer.timeout.connect(this.on_tick);
     }

     on_slider(value: float): void {
       this.label.text = `Slider: ${value}`;
     }

     on_button(): void {
       this.label.text = 'Button pressed';
     }

     on_tick(): void {
       this.ticks += 1;
       this.label.text = `Ticks: ${this.ticks}`;
     }
   }
   ```
2. Set the `Timer` to `wait_time = 1.0`, `autostart = true` in the Inspector.
3. Add your own signal to a child scene (`Control` with an `HSlider`). In `src/meter.ts`:
   ```ts
   export class Meter extends Control {
     threshold_crossed = gd.signal<[value: float]>();
     @onready slider: HSlider = this.get_node('HSlider');

     _ready(): void {
       this.slider.value_changed.connect(this.on_changed);
     }

     on_changed(value: float): void {
       if (value > 50.0) this.threshold_crossed.emit(value);
     }
   }
   ```
4. In `p4.ts`'s `_ready()`, connect the child's signal: get the child with `gd.as(this.get_node('Meter'), Meter)` and call `meter.threshold_crossed.connect(this.on_threshold)`.
5. Rule to follow: **call down, signal up.** A parent calls methods on its children. A child never reaches up to its parent. It emits a signal.

**Learn:** built-in signals, connecting in code, custom signals with `gd.signal<[...]>()` and `emit`, `Timer`, why the editor's Signals tab is off limits here.
**Done when:** the slider, the button, the timer and your custom signal all update the label, and no child script calls `get_parent()`.

---
Previous: [P3](p03-first-script-logic.md) | [Index](README.md) | Next: [P5: UI playground](p05-ui-playground.md)
