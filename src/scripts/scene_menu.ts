export namespace SceneMenu {
  export const SCENES: Array<[label: string, path: string]> = [
    ['S1: Person card', 'res://src/scenes/s1.tscn'],
    ['S2: Base map', 'res://src/scenes/s2.tscn'],
    ['S3: Clock and schedule', 'res://src/scenes/s3.tscn'],
    ['S4: Event pop-up', 'res://src/scenes/s4.tscn'],
    ['S5: Conversation', 'res://src/scenes/s5.tscn'],
    ['S6: Border watch', 'res://src/scenes/s6.tscn'],
    ['S7: A day', 'res://src/scenes/s7.tscn'],
  ];
}

export class SceneMenu extends Control {
  @onready list: VBoxContainer = this.get_node('VBoxContainer');

  _ready(): void {
    for (let i = 0; i < SceneMenu.SCENES.size(); i++) {
      const label = SceneMenu.SCENES[i][0];
      const path = SceneMenu.SCENES[i][1];
      const button = new Button();
      button.text = label;
      button.pressed.connect(() => this.get_tree().change_scene_to_file(path));
      this.list.add_child(button);
    }
  }
}
