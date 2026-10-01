# P3: GDScript basics

**Build:** `Control` root, a `Button` and a `Label`.
1. Script on the root: `@onready var label: Label = $Label` and `@onready var button: Button = $Button`.
2. `var count := 0`. In `_ready()`, `button.pressed.connect(_on_pressed)`. Define `func _on_pressed() -> void:` that increments `count` and sets `label.text = "Clicks: %d" % count`.
3. Add a typed function `func clamp_count(v: int, lo: int, hi: int) -> int` and use it to cap the counter at 10.
4. Press F5, open the Debugger panel, and use the Remote tab in the Scene dock to watch `count` change on the live tree.
5. Put a breakpoint (click the gutter) in `_on_pressed` and step through it.

**Learn:** typed variables, functions, `@onready`, `$NodePath`, string formatting, the debugger, the remote scene tree.
**Done when:** the counter stops at 10 and you have inspected it live in the remote tree.

---
Previous: [P2: Scenes as building blocks](p02-scenes-as-building-blocks.md) | [Index](README.md) | Next: [P4: Signals](p04-signals.md)
