class_name Ping
extends Node

signal pinged

func ping() -> void:
	self.pinged.emit()
