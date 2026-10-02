export class Ping extends Node {
  pinged = gd.signal<[]>();

  ping(): void {
    this.pinged.emit();
  }
}
