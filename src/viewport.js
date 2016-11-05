import Scene from './scene'
export  default class Viewport {

    constructor (canvas) {
        this.canvas = canvas
        this.scene = new Scene()
    }

    render = () => {
        this.canvas.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
        this.scene.draw(this.canvas)
    }
}