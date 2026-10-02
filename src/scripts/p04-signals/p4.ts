import { Ping } from './ping';

export class P4 extends Control {
  @onready button: Button = this.get_node('Button');
  @onready label: Label = this.get_node('Label');
  @onready ping: Ping = this.get_node('Ping');

  _ready(): void {
    this.button.pressed.connect(this.on_button);
    this.ping.pinged.connect(this.on_ping);
  }

  on_button(): void {
    this.ping.ping();
  }

  on_ping(): void {
    this.label.text = 'Pinged';
  }
}
