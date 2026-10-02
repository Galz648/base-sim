class_name P1
extends Node2D

@onready
var label: Label = self.get_node("Label")

func _process(delta: float) -> void:
	self.label.position.x += delta * 60.0
	var width: float = self.get_viewport_rect().size.x
	if self.label.position.x > width:
		self.label.position.x = 0.0
