export  default class Viewport {

    constructor (scene, canvas, transform) {
        this.canvas = canvas
        this.transform = transform
        this.scene = scene
    }

    render = () => {
        this.canvas.clear();
        this.scene.draw(this.canvas, this.transform)
    }
}