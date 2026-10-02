class_name S5
extends Control

@onready
var talk: Button = self.get_node("Talk")
@onready
var line: RichTextLabel = self.get_node("Line")

func _ready() -> void:
	self.talk.pressed.connect(self.on_talk)

func on_talk() -> void:
	var text: String = "The watch was too long."
	self.line.text = text
	self.line.visible_ratio = 0.0
	var tween = self.create_tween()
	tween.tween_property(self.line, "visible_ratio", 1.0, text.length() * 0.03)
