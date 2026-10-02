class_name S1
extends Control

@onready
var card: PersonCard = self.get_node("Card")

func _ready() -> void:
	var person = load("res://src/resources/dana.tres") as Person
	if person == null:
		return
	Base.person = person
	self.card.show_person(person)
