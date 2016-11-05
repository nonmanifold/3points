import { debug } from './utils'
export default class Canvas {
    constructor (canvasElmId) {
        this.canvas = document.getElementById('canvas')
        if (this.canvas.getContext == undefined) {
            debug('unsupported browser')
            return
        }
        this.ctx = this.canvas.getContext('2d')
        this.w = this.canvas.width
        this.h = this.canvas.height
    }
}