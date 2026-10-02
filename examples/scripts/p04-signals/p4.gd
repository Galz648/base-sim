class_name P4
extends Control

@onready
var button: Button = self.get_node("Button")
@onready
var label: Label = self.get_node("Label")
@onready
var ping: Ping = self.get_node("Ping")

func _ready() -> void:
	self.button.pressed.connect(self.on_button)
	self.ping.pinged.connect(self.on_ping)

func on_button() -> void:
	self.ping.ping()

func on_ping() -> void:
	self.label.text = "Pinged"
