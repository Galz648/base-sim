# P9: Juice

**Build:** a gauge, a chart and a bubbling jar.
1. **Live chart:** `Control` > `Line2D`. In `src/chart.ts`:
   ```ts
   export class Chart extends Control {
     @onready line: Line2D = this.get_node('Line2D');

     _process(delta: float): void {
       const y: float = 100.0 + sin(Time.get_ticks_msec() / 500.0) * 50.0;
       this.line.add_point(Vector2(this.line.get_point_count() * 2.0, y));
       if (this.line.get_point_count() > 300) this.line.remove_point(0);
     }
   }
   ```
   (Points keep their x, so the line stops scrolling. As a stretch, shift every point left by 2 each frame, or rebuild all points from a history array.)
2. **Gauge:** a `ProgressBar`. On a button press, animate it with a tween:
   ```ts
   const tween = this.create_tween();
   tween.tween_property(this.bar, 'value', 80.0, 0.4);
   ```
   Try `tween.set_trans(Tween.TRANS_CUBIC)` and `tween.set_ease(Tween.EASE_OUT)`.
3. **Colour change:** a `ColorRect` and an `HSlider`. On `value_changed(v)`, set `this.rect.color = Color.BLUE.lerp(Color.RED, v)`. Then tween the colour instead of snapping it: `this.create_tween().tween_property(this.rect, 'color', target, 0.3)`.
4. **Bubbles:** `GPUParticles2D` (or `CPUParticles2D`). Set `amount`, `lifetime`, direction up, gravity negative, and a `scale_amount` curve in the Inspector. No code needed.
5. **`AnimationPlayer`:** animate a node's `rotation` over 1 s, looped, to make a spinning valve wheel. Start it from a script with `this.anim.play('spin')`.

**Learn:** `Line2D`, `Tween` from TypeScript, particles, `AnimationPlayer`.
**Done when:** a slider changes the colour, a button animates the gauge, bubbles run and the chart scrolls without growing memory.

Shaders are not here on purpose. They get their own page: [P10](p10-shaders.md).

---
Previous: [P8: Shared state and data](p08-shared-state-and-data.md) | [Index](README.md) | Next: [P10: Shaders](p10-shaders.md)
