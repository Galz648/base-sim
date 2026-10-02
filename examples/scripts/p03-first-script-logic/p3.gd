class_name P3
extends Control

@onready
var label: Label = self.get_node("Label")
@onready
var button: Button = self.get_node("Button")
var count: int = 0

func _ready() -> void:
	self.button.pressed.connect(self.on_pressed)

func on_pressed() -> void:
	self.count = clampi(self.count + 1, 0, 10)
	self.label.text = "Clicks: " + str(self.count)
