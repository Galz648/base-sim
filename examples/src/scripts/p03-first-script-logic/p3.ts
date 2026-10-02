export class P3 extends Control {
  @onready label: Label = this.get_node('Label');
  @onready button: Button = this.get_node('Button');

  count: int = 0;

  _ready(): void {
    this.button.pressed.connect(this.on_pressed);
  }

  on_pressed(): void {
    this.count = clampi(this.count + 1, 0, 10);
    this.label.text = `Clicks: ${this.count}`;
  }
}
