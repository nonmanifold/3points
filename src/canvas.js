import { debug } from './utils'
const PI2 = Math.PI * 2.0
export default class Canvas {
    constructor (canvasElm) {
        this.canvas = canvasElm
        if (this.canvas.getContext == undefined) {
            debug('unsupported browser')
            return
        }
        this.ctx = this.canvas.getContext('2d')

        this.setDimensions(this.canvas.width, this.canvas.height)
    }

    setDimensions = (width, height) => {
        this.w = width
        this.h = height
    }

    clear = () => {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }

    circle = (center, radius, color) => {
        const ctx = this.ctx
        ctx.save()
        ctx.beginPath()
        ctx.arc(center.x, center.y, radius, 0, PI2, false)
        ctx.lineWidth = 1
        ctx.strokeStyle = color
        ctx.stroke()
        ctx.restore()
    }

    poly = (points, transformFn, color) => {
        if (points.length <= 2) {
            return
        }
        const ctx = this.ctx
        ctx.save()
        ctx.beginPath()
        const start = transformFn(points[0])
        ctx.moveTo(start.x, start.y)
        for (let i = 1; i < points.length; i ++) {
            let pView = transformFn(points[i])
            ctx.lineTo(pView.x, pView.y)
        }
        ctx.closePath()
        ctx.lineJoin = 'miter'

        ctx.lineWidth = 1
        ctx.strokeStyle = color
        ctx.stroke()
        ctx.restore()
    }

}