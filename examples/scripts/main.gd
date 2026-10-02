class_name Main
extends Control

func _ready() -> void:
	self.get_tree().call_deferred("change_scene_to_file", "res://src/scenes/scene_menu.tscn")
