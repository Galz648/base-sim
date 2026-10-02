class_name S4
extends Control

@onready
var popup: EventPopup = self.get_node("EventPopup")
@onready
var timer: Timer = self.get_node("Timer")

func _ready() -> void:
	var person = load("res://src/resources/dana.tres") as Person
	if person != null:
		Base.person = person
	self.timer.timeout.connect(self.on_timeout)
	self.timer.one_shot = true
	self.timer.wait_time = 2.0
	self.timer.start()

func on_timeout() -> void:
	var event = load("res://src/resources/cold_shower.tres") as EventData
	if event == null:
		return
	self.popup.show_event(event)
