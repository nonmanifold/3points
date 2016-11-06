const FPS = 70.0
const FRAME_DURATION = 1000.0 / FPS

export  default class Renderer {
    frame_count = 0
    fps_timer = null
    fps = null
    updateId = null
    previousDelta = 0

    constructor (viewport) {
        this.viewport = viewport
    }

    start = () => {
        this.fps = document.getElementById('fps')
        this.fps_timer = setInterval(this.updateFPS, 1000)
        this.updateId = window.requestAnimationFrame(this.processFrame)
        this.processFrame()
    }

    processFrame = (currentDelta) => {
        this.updateId = window.requestAnimationFrame(this.processFrame)

        const delta = currentDelta - this.previousDelta

        if (delta < FRAME_DURATION) {
            return // drop frame
        }

        this.viewport.render()
        this.frame_count ++

        this.previousDelta = currentDelta
    }


    updateFPS = () => { //add new message
        if (this.fps) {
            this.fps.innerHTML = (this.frame_count ) + ' fps, Framerate is ' + parseInt(this.frame_count / FPS * 100) + '%\n<br>'
        }
        this.frame_count = 0
    }

}