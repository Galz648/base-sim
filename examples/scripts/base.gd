class_name BaseState
extends Node

const MENU_SCENE = "res://src/scenes/scene_menu.tscn"

var person: Person = null
var hour: float = 6.0
signal hour_changed(hour: float)
var back: Button = null

func _ready() -> void:
	var layer = CanvasLayer.new()
	layer.layer = 100
	self.add_child(layer)
	var button = Button.new()
	button.text = "Back"
	button.custom_minimum_size = Vector2(140.0, 52.0)
	button.pressed.connect(self.on_back)
	layer.add_child(button)
	self.back = button

func on_back() -> void:
	self.get_tree().change_scene_to_file(BaseState.MENU_SCENE)

func _process(delta: float) -> void:
	self.hour = fmod(self.hour + delta, 24.0)
	self.hour_changed.emit(self.hour)
	self.place_back()

func place_back() -> void:
	if self.back == null:
		return
	var scene = self.get_tree().current_scene
	var path: String = "" if scene == null else scene.scene_file_path
	self.back.visible = path != "" and path != BaseState.MENU_SCENE
	var size: Vector2 = self.get_viewport().get_visible_rect().size
	self.back.position = Vector2(size.x - 164.0, 16.0)
