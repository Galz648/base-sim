# S4: Event pop-ups

Things go wrong at the base: a car breaks down, the wind picks up, the shower runs cold. A card slides in, you pick a response, and the numbers move. Think *Papers, Please*.

**Components:** custom `Resource`s, `@export`, `DirAccess`, `PanelContainer`, `Button`, `Timer`, `Tween`, `AudioStreamPlayer`, a `CanvasLayer`.

**Files:**
```
event_data.gd           class_name EventData extends Resource
choice_data.gd          class_name ChoiceData extends Resource
events/*.tres           one resource per event
event_popup.tscn        the card that slides in
```

**Steps:**
1. `ChoiceData`: `@export var label: String`, `@export var effects: Dictionary` (for example `{"discipline": -0.1, "fatigue": 0.1}`), `@export var result_text: String`.
2. `EventData`: `@export var title: String`, `@export var body: String`, `@export var kind: String` ("internal" or "external"), `@export var choices: Array[ChoiceData]`, `@export var icon: Texture2D`.
3. Make a handful of `.tres` files from the source README list. Internal: car breakdown, high winds, cold shower, no breakfast, lost equipment. External: infiltration attempt, long higher-ups meeting. Give each two or three choices with different effects.
4. **Scheduler:** a `Timer` (`wait_time` about 20 s, `autostart`). On `timeout`, list `res://events/*.tres` with `DirAccess`, `load()` them, pick one at random, and show it.
5. **Popup:** `PanelContainer` with the title, body and one `Button` per choice (create them in code). On a pressed choice, apply `effects` to every person (or to the affected ones): `person.set(key, clampf(person.get(key) + value, 0.0, 1.0))`. Show `result_text`, then close.
6. **Queue:** if a second event arrives while one is open, add it to an `Array` and show it afterwards. A small badge on the corner shows the count.
7. **Feel:** the card slides in from the edge with `TRANS_BACK` and a soft thud. External events add a red edge flash and a siren. The number changes pop up as floating text ("-0.1 discipline") that fades and rises. If a choice makes things worse, shake the card.

**Done when:** events arrive on their own, each looks and sounds like its kind, choices change the bars from S1, and you can add a new event by saving a new `.tres` file with no code.

---
Previous: [S3](s3-clock-and-schedule.md) | [Index](README.md) | Next: [S5: Conversation](s5-conversation.md)
