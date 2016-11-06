import { getLocalMouse } from './utils'
export  default class Viewport {
    dragItemId = - 1

    constructor (scene, canvas, transform) {
        this.canvas = canvas
        this.transform = transform
        this.scene = scene

        const canvasElm = canvas.canvas
        canvasElm.addEventListener('mousedown', this.mousedown)
        canvasElm.addEventListener('mouseout', this.removeMouseTracking)
        canvasElm.addEventListener('mouseup', this.mouseup)
    }

    removeMouseTracking = () => {
        this.canvas.canvas.removeEventListener('mousemove', this.mousemove)
        this.dragItemId = - 1
    }

    mousedown = (e) => {
        const p = this.transform.view2world(getLocalMouse(e))
        const idx = this.scene.getIdxAt(p)
        if (idx >= 0) {
            this.dragItemId = idx
        }
        this.canvas.canvas.addEventListener('mousemove', this.mousemove)
    }

    mouseup = (e) => {
        const p = this.transform.view2world(getLocalMouse(e))
        this.removeMouseTracking()
        if (this.dragItemId === - 1) {
            this.scene.addPoint(p)
        }
    }

    mousemove = (e) => {
        if (this.dragItemId >= 0) {
            const p = this.transform.view2world(getLocalMouse(e))
            this.scene.move(this.dragItemId, p)
        }
    }

    render = () => {
        this.canvas.clear();
        this.scene.draw(this.canvas, this.transform)
    }
}