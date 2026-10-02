class_name P5
extends Control

@onready
var slider: HSlider = self.get_node("VBoxContainer/HSlider")
@onready
var label: Label = self.get_node("VBoxContainer/Label")

func _ready() -> void:
	self.slider.value_changed.connect(self.on_slider)

func on_slider(v: float) -> void:
	self.label.text = "Volume: " + str(v)
