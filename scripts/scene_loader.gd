class_name SceneLoader
extends Node2D

func _ready():
	var packed = load("res://src/node_2d.tscn")
	var room = packed.instantiate()
	self.add_child(room)

func load_asset(path: String):
	return load(path)
