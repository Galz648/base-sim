class_name GameRoot
extends Node

var sim = Sim.new({
	"floor": floor,
	"clamp": clamp,
})
var state = self.sim.store.get("state")

func _ready() -> void:
	var timer = Timer.new()
	timer.wait_time = 1.0
	timer.autostart = true
	timer.timeout.connect(self._on_tick)
	self.add_child(timer)

func _on_tick() -> void:
	self.state = self.sim.apply(self.state, {
		"type": "HourElapsed",
	})
	print(self.state.get("hour"))
