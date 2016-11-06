import Canvas from '../canvas'
import { Point2 } from '../utils'
import createMockCanvas from './mock-canvas'

describe('Canvas', () => {

    it('Should init context', () => {
        const { canvas } = createMockCanvas()
        const c = new Canvas(canvas)
        expect(canvas.getContext).toHaveBeenCalledWith('2d')
    })

    it('Should clear() rect', () => {
        const { canvas, ctx } = createMockCanvas(100, 200)
        const c = new Canvas(canvas)
        c.clear()
        expect(ctx.clearRect).toHaveBeenCalledWith(0, 0, 100, 200)
    })

    it('Should draw circles', () => {
        const { canvas, ctx } = createMockCanvas()
        const c = new Canvas(canvas)
        c.circle(new Point2(10, 10), 10, 'rgb(0,0,255)')
        expect(ctx.strokeStyle).toBe('rgb(0,0,255)')
        expect(ctx.lineWidth).toBe(1)
        expect(ctx.arc).toHaveBeenCalledWith(10, 10, 10, 0, Math.PI * 2, false)
    })

    it('Should draw polygons', () => {
        const { canvas, ctx } = createMockCanvas()
        const c = new Canvas(canvas)
        c.poly([new Point2(0, 0), new Point2(10, 10), new Point2(- 10, 10)], (p) => p, 'rgb(0,0,255)')
        expect(ctx.strokeStyle).toBe('rgb(0,0,255)')
        expect(ctx.lineWidth).toBe(1)
    })

    it('Should draw multiline text', () => {
        const { canvas, ctx } = createMockCanvas()
        const c = new Canvas(canvas)
        c.text(['text'])
        expect(ctx.fillText).toHaveBeenCalledWith('text', 0, 12)
    })
})