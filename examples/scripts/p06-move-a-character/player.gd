class_name Player
extends CharacterBody2D

@export
var speed: float = 120.0

func _physics_process(delta: float) -> void:
	var direction: Vector2 = Input.get_vector("move_left", "move_right", "move_up", "move_down")
	self.velocity = (direction * self.speed)
	self.move_and_slide()
