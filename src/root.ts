export class Root extends Node2D {
    @onready label: Label = this.get_node('Label')

    _ready(): void {
        this.label.text = "AGI IS DEFINITELY NOT HERE"
    }
    _process(delta: float): void {
        this.label.position = Vector2(this.label.position.x + delta * 60, this.label.position.y)
        const width: float = this.get_viewport_rect().size.x
        if (this.label.position.x > width) {
            this.label.position = Vector2()
        }
    }


}
