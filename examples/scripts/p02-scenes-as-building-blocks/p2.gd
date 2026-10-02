class_name P2
extends Node2D

func _ready() -> void:
	var ball = preload("res://src/scenes/p02-scenes-as-building-blocks/ball.tscn").instantiate() as Ball
	if ball == null:
		return
	ball.position = Vector2(200.0, 150.0)
	self.add_child(ball)
