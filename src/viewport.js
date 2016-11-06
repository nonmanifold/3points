import Scene from './scene'
export  default class Viewport {

    constructor (canvas) {
        this.canvas = canvas
        this.scene = new Scene()
    }

    render = () => {
        this.canvas.clear();
        this.scene.draw(this.canvas)
    }
}