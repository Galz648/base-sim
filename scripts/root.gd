class_name Root
extends Node2D

@onready
var label: Label = self.get_node("Label")

func _ready() -> void:
	self.label.text = "AGI IS DEFINITELY NOT HERE"

func _process(delta: float) -> void:
	self.label.position = Vector2(self.label.position.x + delta * 60, self.label.position.y)
	var width: float = self.get_viewport_rect().size.x
	if self.label.position.x > width:
		self.label.position = Vector2()
