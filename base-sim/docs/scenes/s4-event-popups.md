# S4: Event pop-ups

Things go wrong at the base: a car breaks down, the wind picks up, the shower runs cold. A card slides in, you pick a response, and the numbers move. Think *Papers, Please*.

**Components:** custom `Resource`s, `@exports`, `DirAccess`, `PanelContainer`, `Button`, `Timer`, `Tween`, `AudioStreamPlayer`, a `CanvasLayer`.

**Files:**
```
src/choice_data.ts      class ChoiceData extends Resource
src/event_data.ts       class EventData extends Resource
events/*.tres           one resource per event (made in the Inspector)
event_popup.tscn        the card that slides in
```

**Steps:**
1. Write the two resources:
   ```ts
   // src/choice_data.ts
   export class ChoiceData extends Resource {
     @exports label: string = '';
     @exports effects: Dictionary = {};          // for example { discipline: -0.1, fatigue: 0.1 }
     @exports result_text: string = '';
   }

   // src/event_data.ts
   export class EventData extends Resource {
     @exports title: string = '';
     @exports body: string = '';
     @exports kind: string = 'internal';         // 'internal' or 'external'
     @exports choices: Array<ChoiceData> = [];
     @exports icon: Texture2D | null = null;
   }
   ```
2. In the Inspector, make a handful of `.tres` files from the source README list. Internal: car breakdown, high winds, cold shower, no breakfast, lost equipment. External: infiltration attempt, long higher-ups meeting. Give each two or three choices with different effects.
3. **Scheduler:** a `Timer` (`wait_time` about 20 s, `autostart`) in a script `event_director.ts`:
   ```ts
   export class EventDirector extends Node {
     @onready timer: Timer = this.get_node('Timer');

     _ready(): void {
       this.timer.timeout.connect(this.on_timeout);
     }

     on_timeout(): void {
       const dir = DirAccess.open('res://events');
       // list the .tres files, load() one at random, and show it
     }
   }
   ```
   Fill in the listing: `dir.get_files()` returns the file names, and `load('res://events/' + name)` gives the resource. Read the generated `.gd` once to confirm it matches what you expect.
4. **Popup:** `PanelContainer` with the title, body and one `Button` per choice (create them in code). On a pressed choice, apply `effects` to every person (or to the affected ones), clamping each need to 0–1. Show `result_text`, then close.
5. **Queue:** if a second event arrives while one is open, add it to an `Array` and show it afterwards. A small badge on the corner shows the count.
6. **Feel:** the card slides in from the edge with `Tween.TRANS_BACK` and a soft thud. External events add a red edge flash and a siren. The number changes pop up as floating text ("-0.1 discipline") that fades and rises. If a choice makes things worse, shake the card.

**Done when:** events arrive on their own, each looks and sounds like its kind, choices change the bars from S1, and you can add a new event by saving a new `.tres` file with no code.

---
Previous: [S3](s3-clock-and-schedule.md) | [Index](README.md) | Next: [S5: Conversation](s5-conversation.md)
