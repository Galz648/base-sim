class_name SceneMenu
extends Control

const SCENES: Array = [["S1: Person card", "res://src/scenes/s1.tscn"], ["S2: Base map", "res://src/scenes/s2.tscn"], ["S3: Clock and schedule", "res://src/scenes/s3.tscn"], ["S4: Event pop-up", "res://src/scenes/s4.tscn"], ["S5: Conversation", "res://src/scenes/s5.tscn"], ["S6: Border watch", "res://src/scenes/s6.tscn"], ["S7: A day", "res://src/scenes/s7.tscn"]]

@onready
var list: VBoxContainer = self.get_node("VBoxContainer")

func _ready() -> void:
	var i = 0
	while i < SceneMenu.SCENES.size():
		var label = SceneMenu.SCENES[i][0]
		var path = SceneMenu.SCENES[i][1]
		var button = Button.new()
		button.text = label
		button.pressed.connect(func(): return self.get_tree().change_scene_to_file(path))
		self.list.add_child(button)
		i += 1
