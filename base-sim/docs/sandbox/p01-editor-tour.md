# P1: Editor tour

**Build:** `Node2D` (root) with one child `Label`.
1. Create a new project. Add a `Node2D` root and a child `Label`. Set its text in the Inspector. Save as `p1.tscn`.
2. Set it as the main scene (Project Settings > Application > Run > Main Scene) and press F5.
3. Attach a script to the root (right-click > Attach Script). In `_process(delta)`, add `delta * 60` to `$Label.position.x` and wrap it back to 0 when it passes the window width (`get_viewport_rect().size.x`).

**Learn:** the Scene, Inspector, FileSystem and Node panels, the node tree, running a scene (F5) versus the main scene (F6 for the current scene).
**Done when:** the label scrolls and wraps, and you can name which panel you used for each step.

---
[Index](README.md) | Next: [P2: Scenes as building blocks](p02-scenes-as-building-blocks.md)
