# S1: Person card

A card for one person: a name, a portrait, and three bars (hunger, fatigue, discipline). Buttons feed, rest or scold them, and the card reacts. That is the whole scene.

**Components:** `Control`, `PanelContainer`, `TextureRect`, `Label`, `ProgressBar`, `Button`, `Tween`, a custom `Resource`.

**Scene tree:**
```
S1 (Control)
└── Card (PanelContainer, script: person_card)
    └── VBoxContainer
        ├── Portrait (TextureRect)
        ├── NameLabel (Label)
        ├── HungerBar, FatigueBar, DisciplineBar (ProgressBar, with a Label each)
        └── HBoxContainer: FeedButton, RestButton, ScoldButton
```

**Steps:**
1. Create `src/person.ts` as shown in [the rules](README.md#rules-without-a-simulation). Make two or three `.tres` people in the Inspector (for example "Dana" with `traits = ["angry"]` and "Yossi" with `["sleepy"]`).
2. Write `src/person_card.ts`:
   ```ts
   export class PersonCard extends PanelContainer {
     @onready name_label: Label = this.get_node('VBoxContainer/NameLabel');
     @onready hunger_bar: ProgressBar = this.get_node('VBoxContainer/HungerBar');
     @onready fatigue_bar: ProgressBar = this.get_node('VBoxContainer/FatigueBar');
     @onready discipline_bar: ProgressBar = this.get_node('VBoxContainer/DisciplineBar');
     @onready feed: Button = this.get_node('VBoxContainer/Buttons/FeedButton');
     @onready rest: Button = this.get_node('VBoxContainer/Buttons/RestButton');
     @onready scold: Button = this.get_node('VBoxContainer/Buttons/ScoldButton');

     person: Person | null = null;

     _ready(): void {
       this.feed.pressed.connect(this.on_feed);
       this.rest.pressed.connect(this.on_rest);
       this.scold.pressed.connect(this.on_scold);
     }

     show_person(p: Person): void {
       this.person = p;
       this.name_label.text = p.display_name;
       this.refresh();
     }

     on_feed(): void {
       if (this.person === null) return;
       this.person.hunger = clampf(this.person.hunger - 0.3, 0.0, 1.0);
       this.refresh();
     }

     on_rest(): void {
       if (this.person === null) return;
       this.person.fatigue = clampf(this.person.fatigue - 0.3, 0.0, 1.0);
       this.refresh();
     }

     on_scold(): void {
       if (this.person === null) return;
       this.person.discipline = clampf(this.person.discipline + 0.1, 0.0, 1.0);
       this.person.fatigue = clampf(this.person.fatigue + 0.1, 0.0, 1.0);
       this.refresh();
     }

     refresh(): void {
       if (this.person === null) return;
       const t = this.create_tween();
       t.set_parallel(true);
       t.tween_property(this.hunger_bar, 'value', this.person.hunger * 100.0, 0.3);
       t.tween_property(this.fatigue_bar, 'value', this.person.fatigue * 100.0, 0.3);
       t.tween_property(this.discipline_bar, 'value', this.person.discipline * 100.0, 0.3);
     }
   }
   ```
3. **Feel:** colour each bar by level (green, orange, red) using a `StyleBoxFlat` fill. When a bar goes above 0.8, pulse it with a looping tween. On Scold, shake the card (tween `position:x` a few pixels, three times). On Feed, spawn a small "+" particle burst.
4. **Mood portrait:** swap the portrait texture (happy, neutral, angry) from the three values. Squash and stretch the portrait when it changes.

**Done when:** clicking the buttons moves the bars smoothly, the colours and the portrait follow, and a neglected person looks and feels unhappy.

---
[Index](README.md) | Next: [S2: Base map](s2-base-map.md)
