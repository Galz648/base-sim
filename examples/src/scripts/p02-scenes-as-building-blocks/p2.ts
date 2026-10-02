import { Ball } from './ball';

export class P2 extends Node2D {
  _ready(): void {
    const ball = gd.as(preload('res://src/scenes/p02-scenes-as-building-blocks/ball.tscn').instantiate(), Ball);
    if (ball === null) return;
    ball.position = Vector2(200.0, 150.0);
    this.add_child(ball);
  }
}
