# P9: Juice

**Build:** a gauge, a chart and a bubbling jar.
1. Live chart: `Control` > `Line2D`. Each frame `add_point(Vector2(x, y))`, and when `get_point_count()` exceeds 300, `remove_point(0)`. Map x by index and y from a noisy value like `sin(Time.get_ticks_msec() / 500.0)`.
2. Gauge: `ProgressBar`. On a button press, animate it with `create_tween().tween_property(bar, "value", target, 0.4)`. Try `set_trans()` and `set_ease()`.
3. Colour change: a `ColorRect` and an `HSlider`. On `value_changed(v)`, set `rect.color = Color.BLUE.lerp(Color.RED, v)`. Then tween the colour instead of snapping it: `create_tween().tween_property(rect, "color", target, 0.3)`.
4. Bubbles: `GPUParticles2D` (or `CPUParticles2D`). Set `amount`, `lifetime`, direction up, gravity negative, and a `scale_amount` curve.
5. `AnimationPlayer`: animate a node's `rotation` over 1 s, looped, to make a spinning valve wheel.

**Learn:** `Line2D`, `Tween`, particles, `AnimationPlayer`.
**Done when:** a slider changes the colour, a button animates the gauge, bubbles run and the chart scrolls without growing memory.

Shaders are not here on purpose. They get their own page: [P10](p10-shaders.md).

---
Previous: [P8: Shared state and data](p08-shared-state-and-data.md) | [Index](README.md) | Next: [P10: Shaders](p10-shaders.md)
