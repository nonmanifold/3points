export  default class Renderer {
    updateId = null

    constructor (viewport) {
        this.viewport = viewport
    }

    start = () => {
        this.updateId = window.requestAnimationFrame(this.processFrame)
        this.processFrame()
    }

    processFrame = (currentDelta) => {
        this.updateId = window.requestAnimationFrame(this.processFrame)

        this.viewport.render()
    }
}