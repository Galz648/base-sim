# P4: Signals

**Build:** `Control` root with `Button`, `HSlider`, `Timer` and `Label`.
1. Connect `HSlider.value_changed` to the root **in the editor** (Node dock > Signals tab > double-click the signal). Display the value in the label.
2. Connect `Button.pressed` **in code** in `_ready()` with `.connect()`.
3. Set the `Timer` to `wait_time = 1.0`, `autostart = true`. Connect `timeout` and append a tick count to the label.
4. Add your own signal to a small child scene: `signal threshold_crossed(value: float)`. Emit with `threshold_crossed.emit(v)` when the slider passes 50. The parent connects to it.
5. Rule to follow: **call down, signal up.** A parent calls methods on its children. A child never reaches up to its parent. It emits a signal.

**Learn:** built-in signals, editor and code connections, custom signals with `signal` and `emit`, `Timer`.
**Done when:** the slider, the button, the timer and your custom signal all update the label, and no child script calls `get_parent()`.

---
Previous: [P3: GDScript basics](p03-gdscript-basics.md) | [Index](README.md) | Next: [P5: UI playground](p05-ui-playground.md)
