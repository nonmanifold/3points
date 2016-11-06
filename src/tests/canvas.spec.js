import Canvas from '../canvas'
import { Point2 } from '../utils'
describe('Canvas', () => {


    function createMockCanvas () {
        const mockCtx = {
            clearRect: jasmine.createSpy('clearRect'),
            save: jasmine.createSpy('save'),
            restore: jasmine.createSpy('restore'),
            arc: jasmine.createSpy('arc'),
            beginPath: jasmine.createSpy('beginPath'),
            stroke: jasmine.createSpy('stroke'),
            moveTo: jasmine.createSpy('moveTo'),
            lineTo: jasmine.createSpy('lineTo'),
            closePath: jasmine.createSpy('closePath')
        }

        const mockCanvas = {
            getContext: function (type) {
                return mockCtx
            },
            width: 100,
            height: 200
        }
        spyOn(mockCanvas, 'getContext').and.callThrough()
        return { canvas: mockCanvas, ctx: mockCtx }
    }

    it('Should init context', () => {
        const { canvas } = createMockCanvas()
        const c = new Canvas(canvas)
        expect(canvas.getContext).toHaveBeenCalledWith('2d')
    })

    it('Should clear() rect', () => {
        const { canvas, ctx } = createMockCanvas()
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
        c.poly([new Point2(0, 0), new Point2(10, 10), new Point2(- 10, 10)], (p) => p, 'rgb(0,0,255)'
        )
        expect(ctx.strokeStyle).toBe('rgb(0,0,255)')
        expect(ctx.lineWidth).toBe(1)
    })
})