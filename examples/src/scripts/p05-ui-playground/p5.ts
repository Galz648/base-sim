export class P5 extends Control {
  @onready slider: HSlider = this.get_node('VBoxContainer/HSlider');
  @onready label: Label = this.get_node('VBoxContainer/Label');

  _ready(): void {
    this.slider.value_changed.connect(this.on_slider);
  }

  on_slider(v: float): void {
    this.label.text = `Volume: ${v}`;
  }
}
