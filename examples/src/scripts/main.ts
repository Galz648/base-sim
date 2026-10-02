export class Main extends Control {
  _ready(): void {
    this.get_tree().call_deferred('change_scene_to_file', 'res://src/scenes/scene_menu.tscn');
  }
}
