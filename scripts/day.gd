class_name Day
extends Control

@onready
var clock: Label = self.get_node("ClockLabel")
@onready
var end_label: Label = self.get_node("EndLabel")
var ended: bool = false

func _ready() -> void:
	var person = load("res://src/resources/dana.tres") as Person
	if person != null:
		Base.person = person
	Base.hour = 6.0
	Base.hour_changed.connect(self.on_hour)

func on_hour(hour: float) -> void:
	if self.ended:
		return
	self.clock.text = "" + str(floori(hour))
	if hour < 22.0:
		return
	self.ended = true
	var fatigue: float = 0.0 if Base.person == null else Base.person.fatigue
	self.end_label.text = "Day over. Fatigue " + str(fatigue)
