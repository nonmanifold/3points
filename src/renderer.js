const FPS = 70.0

export  default class Renderer {
    frame_count = 0
    fps_timer = null
    fps = null
    updateId = null

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

        this.viewport.render()
        this.frame_count ++
    }


    updateFPS = () => { //add new message
        if (this.fps) {
            this.fps.innerHTML = (this.frame_count ) + ' fps, Framerate is ' + parseInt(this.frame_count / FPS * 100) + '%\n<br>'
        }
        this.frame_count = 0
    }

}