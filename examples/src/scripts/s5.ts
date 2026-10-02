export class S5 extends Control {
  @onready talk: Button = this.get_node('Talk');
  @onready line: RichTextLabel = this.get_node('Line');

  _ready(): void {
    this.talk.pressed.connect(this.on_talk);
  }

  on_talk(): void {
    const text: string = 'The watch was too long.';
    this.line.text = text;
    this.line.visible_ratio = 0.0;
    const tween = this.create_tween();
    tween.tween_property(this.line, 'visible_ratio', 1.0, text.length() * 0.03);
  }
}
