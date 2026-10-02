class_name Watch
extends Node2D

@onready
var sweep: Node2D = self.get_node("Sweep")
@onready
var walker: PathFollow2D = self.get_node("Path/Walker")
@onready
var notice: Timer = self.get_node("Notice")
@onready
var cone: Area2D = self.get_node("Sweep/Cone")
var caught: bool = false

func _ready() -> void:
	var person = load("res://src/resources/dana.tres") as Person
	if person != null:
		Base.person = person
	var t = self.create_tween()
	t.set_loops()
	t.tween_property(self.sweep, "rotation", 0.6, 4.0)
	t.tween_property(self.sweep, "rotation", -0.6, 4.0)
	self.cone.area_entered.connect(self.on_area_entered)
	self.notice.timeout.connect(self.on_notice)
	self.notice.one_shot = true

func on_area_entered(_area: Area2D) -> void:
	var fatigue: float = 0.0 if Base.person == null else Base.person.fatigue
	self.notice.wait_time = lerpf(0.4, 2.5, fatigue)
	self.notice.start()

func on_notice() -> void:
	self.caught = true

func _process(delta: float) -> void:
	if self.caught:
		return
	self.walker.progress += 40.0 * delta
