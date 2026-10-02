class_name Ball
extends Node2D

var velocity: Vector2 = Vector2(80.0, 60.0)

func _process(delta: float) -> void:
	self.position = (self.position + (self.velocity * delta))
	var size: Vector2 = self.get_viewport_rect().size
	if self.position.x < 0.0 or self.position.x > size.x:
		self.velocity.x = -self.velocity.x
	if self.position.y < 0.0 or self.position.y > size.y:
		self.velocity.y = -self.velocity.y
