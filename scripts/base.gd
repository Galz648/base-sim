class_name BaseState
extends Node

var person: Person = null
var hour: float = 6.0
signal hour_changed(hour: float)

func _process(delta: float) -> void:
	self.hour = fmod(self.hour + delta, 24.0)
	self.hour_changed.emit(self.hour)
