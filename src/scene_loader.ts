export class SceneLoader extends Node2D {
  _ready() {
    let packed = load('res://src/node_2d.tscn');
    let room = packed.instantiate();
    this.add_child(room);
  }

  load_asset(path: GodotResourceName) {
    return load(path);
  }
}
