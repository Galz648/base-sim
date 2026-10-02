import { Person } from './person';

export namespace BaseState {
  export const MENU_SCENE = 'res://src/scenes/scene_menu.tscn';
}

export class BaseState extends Node {
  person: Person | null = null;
  hour: float = 6.0;
  hour_changed = gd.signal<[hour: float]>();
  back: Button | null = null;

  _ready(): void {
    const layer = new CanvasLayer();
    layer.layer = 100;
    this.add_child(layer);

    const button = new Button();
    button.text = 'Back';
    button.custom_minimum_size = Vector2(140.0, 52.0);
    button.pressed.connect(this.on_back);
    layer.add_child(button);
    this.back = button;
  }

  on_back(): void {
    this.get_tree().change_scene_to_file(BaseState.MENU_SCENE);
  }

  _process(delta: float): void {
    this.hour = fmod(this.hour + delta, 24.0);
    this.hour_changed.emit(this.hour);
    this.place_back();
  }

  place_back(): void {
    if (this.back === null) return;
    const scene = this.get_tree().current_scene;
    const path: string = scene === null ? '' : scene.scene_file_path;
    this.back.visible = path !== '' && path !== BaseState.MENU_SCENE;
    const size: Vector2 = this.get_viewport().get_visible_rect().size;
    this.back.position = Vector2(size.x - 164.0, 16.0);
  }
}
