class_name Slot
extends Label

func _can_drop_data(_at_position: Vector2, _data) -> bool:
	return true

func _drop_data(_at_position: Vector2, data) -> void:
	self.text = str(data)
