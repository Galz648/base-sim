# P10: Shaders (standalone)

A page on its own. Not needed for the sketches, which use plain colours and tweens. Do it when you want to, then optionally use it for a day-night tint or a searchlight glow in the sketches.

Godot's shader language looks like GLSL. A `canvas_item` shader runs once per pixel of a 2D node. You only write `fragment()`. Built-ins you will use: `UV` (0–1 position across the node), `COLOR` (the output pixel), `TEXTURE` (the node's texture), `TIME` (seconds).

Each step is one scene: a `ColorRect` (or `Sprite2D`) with a `ShaderMaterial` (Inspector > Material > New ShaderMaterial > Shader > New Shader), and the shader text below. Keep every step as a separate file so you can compare them.

**Step 1: Hello shader.**
```
shader_type canvas_item;
void fragment() {
    COLOR = vec4(UV.x, UV.y, 0.5, 1.0);
}
```
You should see a gradient across the rect. Change the numbers and watch it update live.

**Step 2: A uniform.**
```
shader_type canvas_item;
uniform float heat : hint_range(0.0, 1.0) = 0.0;
void fragment() {
    COLOR = mix(vec4(0.2, 0.4, 1.0, 1.0), vec4(1.0, 0.3, 0.1, 1.0), heat);
}
```
- The uniform shows up in the Inspector under Shader Parameters. Drag it.
- From code: `rect.material.set_shader_parameter("heat", v)`, driven by an `HSlider`.

**Step 3: Texture and alpha.** On a `Sprite2D` with the editor icon:
```
shader_type canvas_item;
uniform float heat : hint_range(0.0, 1.0) = 0.0;
void fragment() {
    vec4 tex = texture(TEXTURE, UV);
    COLOR = vec4(mix(tex.rgb, vec3(1.0, 0.3, 0.1), heat), tex.a);
}
```
Keep `tex.a` so transparent pixels stay transparent.

**Step 4: Animate with TIME.**
```
shader_type canvas_item;
uniform float heat : hint_range(0.0, 1.0) = 0.0;
void fragment() {
    vec2 uv = UV;
    uv.x += sin(UV.y * 20.0 + TIME * 3.0) * 0.01 * heat;
    COLOR = texture(TEXTURE, uv);
}
```
Hotter means more wobble. Change the frequency (20.0), speed (3.0) and amplitude (0.01).

**Step 5: A liquid level.** On a `ColorRect`:
```
shader_type canvas_item;
uniform float level : hint_range(0.0, 1.0) = 0.5;
uniform float heat : hint_range(0.0, 1.0) = 0.0;
void fragment() {
    float surface = 1.0 - level + sin(UV.x * 12.0 + TIME * 2.0) * 0.01;
    float inside = step(surface, UV.y);
    vec4 liquid = mix(vec4(0.2, 0.4, 1.0, 1.0), vec4(1.0, 0.3, 0.1, 1.0), heat);
    COLOR = vec4(liquid.rgb, inside);
}
```
`step(a, b)` is 0 below `a` and 1 above. The top part becomes transparent, and the surface wobbles.

**Learn:** `ShaderMaterial`, `fragment()`, `UV`, `COLOR`, `TEXTURE`, `TIME`, uniforms, `set_shader_parameter`, `mix`, `step`, `sin`.
**Done when:** a slider changes the colour, wobble and fill level of a rect, using only the uniforms in the Inspector and one `set_shader_parameter` call per slider.

---
Previous: [P9: Juice](p09-juice.md) | [Index](README.md) | Next: [Game sketches](../scenes/README.md)
