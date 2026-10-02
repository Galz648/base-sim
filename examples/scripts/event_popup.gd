class_name EventPopup
extends PanelContainer

@onready
var title_label: Label = self.get_node("VBoxContainer/Title")
@onready
var body_label: Label = self.get_node("VBoxContainer/Body")
@onready
var choice: Button = self.get_node("VBoxContainer/Choice")
var event: EventData = null

func _ready() -> void:
	self.choice.pressed.connect(self.on_choice)

func show_event(event: EventData) -> void:
	self.event = event
	self.title_label.text = event.title
	self.body_label.text = event.body

func on_choice() -> void:
	if self.event == null or Base.person == null:
		return
	Base.person.fatigue = clampf(Base.person.fatigue + self.event.fatigue_change, 0.0, 1.0)
