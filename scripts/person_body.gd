class_name PersonBody
extends CharacterBody2D

var target: Vector2 = Vector2.ZERO
var moving: bool = false

func go_to(target: Vector2) -> void:
	self.target = target
	self.moving = true

func _physics_process(_delta: float) -> void:
	if not self.moving:
		return
	if self.global_position.distance_to(self.target) < 4.0:
		self.moving = false
		return
	self.velocity = Vector2(100, 100)
	self.move_and_slide()
