import { debug } from './utils'
export default class Canvas {
    constructor (canvasElmId) {
        this.canvas = document.getElementById(canvasElmId)
        if (this.canvas.getContext == undefined) {
            debug('unsupported browser')
            return
        }
        this.ctx = this.canvas.getContext('2d')
        this.w = this.canvas.width
        this.h = this.canvas.height
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }
}