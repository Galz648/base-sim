class_name PersonCard
extends PanelContainer

@onready
var name_label: Label = self.get_node("VBoxContainer/NameLabel")
@onready
var bar: ProgressBar = self.get_node("VBoxContainer/FatigueBar")
@onready
var rest: Button = self.get_node("VBoxContainer/RestButton")
var person: Person = null

func _ready() -> void:
	self.rest.pressed.connect(self.on_rest)

func show_person(p: Person) -> void:
	self.person = p
	self.name_label.text = p.display_name
	self.refresh()

func on_rest() -> void:
	if self.person == null:
		return
	self.person.fatigue = clampf(self.person.fatigue - 0.3, 0.0, 1.0)
	self.refresh()

func refresh() -> void:
	if self.person == null:
		return
	var t = self.create_tween()
	t.tween_property(self.bar, "value", self.person.fatigue * 100.0, 0.3)
