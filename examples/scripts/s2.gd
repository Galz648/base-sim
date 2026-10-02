class_name S2
extends Node2D

@onready
var person: PersonBody = self.get_node("Person")
@onready
var place: Marker2D = self.get_node("Place")

func _ready() -> void:
	self.person.go_to(self.place.global_position)
