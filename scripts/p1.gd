class_name Enemy
extends CharacterBody2D

## Pixels per second.
@export
var speed: float = 80.0
var target: Node2D = null

func _physics_process(delta: float):
	# Stand still until there is something to chase.
	if self.target == null:
		return
	var direction = self.global_position.direction_to(self.target.global_position)
	self.velocity = (direction * self.speed)
	self.move_and_slide()

func chase(node: Node2D):
	self.target = node
