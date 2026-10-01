# P5: UI playground

**Build:** a settings-style panel.
1. Root `Control` with Layout set to Full Rect. Child `MarginContainer` (set the four `theme_override_constants/margin_*`), then `VBoxContainer`.
2. Inside: a `GridContainer` (`columns = 2`) with `Label` + `HSlider` rows (three of them), then an `HBoxContainer` with two `Button`s.
3. Select a `Control`, open the Layout menu, and try anchor presets. Resize the window and watch what moves.
4. Set `size_flags_horizontal` to `Expand + Fill` on the sliders.
5. Create a `Theme` resource (FileSystem > New Resource > Theme), open it and set a font size and a `Button` stylebox. Assign it to the root's `theme` property.

**Learn:** anchors, containers, size flags, `Theme`, stretch settings.
**Done when:** the panel looks correct at three window sizes with no manual positioning.

---
Previous: [P4: Signals](p04-signals.md) | [Index](README.md) | Next: [P6: Move a character](p06-move-a-character.md)
