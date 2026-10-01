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
            ├── Line (RichTextLabel, bbcode_enabled)
            └── Choices (VBoxContainer)
```

**Steps:**
1. Player and walls from [P6](../sandbox/p06-move-a-character.md). Add the `interact` action to the Input Map.
2. The player's `Reach` finds overlapping people. Show `PromptLabel` ("E: talk to Dana") for the nearest. In `_unhandled_input`, check `event.is_action_pressed('interact')` and open the dialogue.
3. Dialogue data, as resources:
   ```ts
   // src/reply.ts
   export class Reply extends Resource {
     @exports label: string = '';
     @exports next: DialogueNode | null = null;
     @exports effects: Dictionary = {};
     @exports reveals_trait: bool = false;
   }

   // src/dialogue_node.ts
   export class DialogueNode extends Resource {
     @exports text: string = '';
     @exports replies: Array<Reply> = [];
   }
   ```
   (Two resources referring to each other may need import tweaks. If the converter complains, put the replies into one resource file, or read the error.)
4. Make one short conversation per person as `.tres` files (a greeting, a complaint about food, a request).
5. **Typewriter:** in `src/dialogue.ts`:
   ```ts
   show_line(text: string): void {
     this.line.text = text;
     this.line.visible_ratio = 0.0;
     this.tween = this.create_tween();
     this.tween.tween_property(this.line, 'visible_ratio', 1.0, text.length() * 0.03);
   }
   ```
   (`text.length()` is GDScript's `String.length()`. Convert once and read the `.gd` to confirm it matches.) Clicking skips to the end (`this.tween.kill()`, `this.line.visible_ratio = 1.0`).
6. **Replies:** create a `Button` per reply when the typewriter finishes, and connect each in code. A reply applies its `effects` to the person, and optionally reveals one hidden trait ("Dana seems quick to anger") into their S1 card.
7. **Feel:** the dialogue panel slides up from the bottom. The camera zooms in slightly while talking (tween `zoom`). A blip sound per few characters. The person turns to face you (flip the sprite).
8. Lock player movement while the dialogue is open and restore it when it closes.

**Done when:** you can walk up to someone, hear the line type out, choose a reply, see their bars change and, sometimes, discover a hidden trait.

---
Previous: [S4](s4-event-popups.md) | [Index](README.md) | Next: [S6: Border watch](s6-border-watch.md)
