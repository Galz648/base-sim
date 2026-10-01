# S5: Conversation

Walk up to a person, press a key, and talk. A line types out, you pick a reply, and you learn something about them.

**Components:** `CharacterBody2D` (player), `Area2D` (reach), `RichTextLabel`, `Tween`, `Button`, custom `Resource`, `CanvasLayer`, `Input Map`.

**Scene tree:**
```
S5 (Node2D)
├── World (instance of S2)
├── Player (CharacterBody2D) > Sprite2D, CollisionShape2D, Camera2D, Reach (Area2D)
└── HUD (CanvasLayer)
    ├── PromptLabel
    └── Dialogue (PanelContainer, hidden)
        └── VBoxContainer
            ├── Name (Label)
            ├── Line (RichTextLabel, bbcode_enabled, visible_characters via visible_ratio)
            └── Choices (VBoxContainer)
```

**Steps:**
1. Player and walls from [P6](../sandbox/p06-move-a-character.md). Add the `interact` action to the Input Map.
2. The player's `Reach` finds overlapping people. Show `PromptLabel` ("E: talk to Dana") for the nearest. Press `interact` to open the dialogue.
3. `DialogueNode` (`Resource`): `@export var text: String`, `@export var replies: Array[Reply]`. `Reply` has `@export var label: String`, `@export var next: DialogueNode`, `@export var effects: Dictionary`, `@export var reveals_trait: bool`.
4. Make one short conversation per person as `.tres` files (a greeting, a complaint about food, a request).
5. **Typewriter:** set `Line.text`, `Line.visible_ratio = 0.0`, then `create_tween().tween_property(Line, "visible_ratio", 1.0, text.length() * 0.03)`. Clicking skips to the end (`tween.kill()`, `visible_ratio = 1.0`).
6. **Replies:** create a `Button` per reply when the typewriter finishes. A reply applies its `effects` to the person, and optionally reveals one hidden trait ("Dana seems quick to anger") into their S1 card.
7. **Feel:** the dialogue panel slides up from the bottom. The camera zooms in slightly while talking (tween `zoom`). A blip sound per few characters. The person turns to face you (flip the sprite).
8. Lock player movement while the dialogue is open and restore it when it closes.

**Done when:** you can walk up to someone, hear the line type out, choose a reply, see their bars change and, sometimes, discover a hidden trait.

---
Previous: [S4](s4-event-popups.md) | [Index](README.md) | Next: [S6: Border watch](s6-border-watch.md)
