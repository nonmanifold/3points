const FPS = 70

export  default class Renderer {
    frame_count = 0
    fps_timer = null
    fps = null

    constructor (viewport) {
        this.viewport = viewport
    }

    start = () => {
        this.fps = document.getElementById('fps')
        this.fps_timer = setInterval(this.updateFPS, 1000)
        window.requestAnimationFrame(this.processFrame)
        this.processFrame()
    }

    processFrame = () => {
        this.viewport.render()
        this.frame_count ++
        window.requestAnimationFrame(this.processFrame)
    }


    updateFPS = () => { //add new message
        if (this.fps) {
            this.fps.innerHTML = (this.frame_count ) + ' fps, Framerate is ' + parseInt(this.frame_count / FPS * 100) + '%\n<br>'
        }
        this.frame_count = 0
    }

}