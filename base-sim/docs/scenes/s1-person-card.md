# S1: Person card

A card for one person: a name, a portrait, and three bars (hunger, fatigue, discipline). Buttons feed, rest or scold them, and the card reacts. That is the whole scene.

**Components:** `Control`, `PanelContainer`, `TextureRect`, `Label`, `ProgressBar`, `Button`, `Tween`, a custom `Resource`.

**Scene tree:**
```
S1 (Control)
└── Card (PanelContainer, script: person_card.gd)
    └── VBoxContainer
        ├── Portrait (TextureRect)
        ├── NameLabel (Label)
        ├── HungerBar, FatigueBar, DisciplineBar (ProgressBar, with a Label each)
        └── HBoxContainer: FeedButton, RestButton, ScoldButton
```

**Steps:**
1. Create `person.gd` with `class_name Person extends Resource` and the `@export` fields from [the rules](README.md#rules-without-a-simulation). Make two or three `.tres` people in the Inspector (for example "Dana" with `traits = ["angry"]` and "Yossi" with `["sleepy"]`).
2. `person_card.gd` has `var person: Person` and `func show_person(p: Person)`, which sets the label and bar values.
3. Buttons change the numbers by fixed amounts: Feed `hunger -= 0.3`, Rest `fatigue -= 0.3`, Scold `discipline += 0.1`, `fatigue += 0.1`. Clamp to 0–1.
4. Show bar changes with a tween: `create_tween().tween_property(bar, "value", v, 0.3)`.
5. **Feel:** colour each bar by level (green, orange, red) using a `StyleBoxFlat` fill. When a bar goes above 0.8, pulse it with a looping tween. On Scold, shake the card (tween `position:x` a few pixels, three times). On Feed, spawn a small "+" particle burst.
6. **Mood portrait:** swap the portrait texture (happy, neutral, angry) from the three values. Squash and stretch the portrait when it changes.

**Done when:** clicking the buttons moves the bars smoothly, the colours and the portrait follow, and a neglected person looks and feels unhappy.

---
[Index](README.md) | Next: [S2: Base map](s2-base-map.md)
