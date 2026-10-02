class_name S3
extends Control

@onready
var clock: Label = self.get_node("ClockLabel")

func _ready() -> void:
	Base.hour_changed.connect(self.on_hour)
	self.on_hour(Base.hour)

func on_hour(hour: float) -> void:
	self.clock.text = "" + str(floori(hour))
