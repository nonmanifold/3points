import Shape from '../shape'
import { Point2 } from '../utils'
import createMockCanvas from './mock-canvas'
import Canvas from '../canvas'
import Transform2D from '../transform2d'

describe('Shape', () => {
    it('should have draw(canvas, transform)', () => {
        const s = new Shape()
        expect(s.draw).toBeDefined()
    })

    it('should accept no more than 3 points', () => {
        const s = new Shape()
        s.addPoint(new Point2(0, 0))
        s.addPoint(new Point2(1, 1))
        s.addPoint(new Point2(2, 1))
        s.addPoint(new Point2(10, 0))
        expect(s.getPoints()).toEqual([new Point2(0, 0), new Point2(1, 1), new Point2(2, 1), new Point2(1, 0)])
        expect(s.getCenterOfMass()).toEqual(new Point2(1, 0.5))

        const s1 = new Shape()
        s1.addPoint(new Point2(0, 0))
        s1.addPoint(new Point2(0, 1))
        s1.addPoint(new Point2(1, 1))
        expect(s1.getPoints()).toEqual([new Point2(0, 0), new Point2(0, 1), new Point2(1, 1), new Point2(1, 0)])
        expect(s1.getCenterOfMass()).toEqual(new Point2(0.5, 0.5))
    })

    it('should calculate area of shape based on 3 points', () => {
        const s = new Shape()
        expect(s.getParallelogramArea()).toBeCloseTo(0.0)
        s.addPoint(new Point2(0, 0))
        s.addPoint(new Point2(0, 1))
        s.addPoint(new Point2(1, 1))
        expect(s.getParallelogramArea()).toBeCloseTo(1.0)
        expect(s.getCenterOfMass()).toEqual(new Point2(0.5, 0.5))
        expect(s.getCircleRadius()).toBeCloseTo(Math.sqrt(1.0 / Math.PI))
    })

    it('should call methods of canvas wrapper when draw()', () => {
        const s = new Shape()
        expect(s.getParallelogramArea()).toBeCloseTo(0.0)
        s.addPoint(new Point2(0, 0))
        s.addPoint(new Point2(0, 1))
        s.addPoint(new Point2(1, 1))
        const { canvas, ctx } = createMockCanvas()
        const c = new Canvas(canvas)
        spyOn(c, 'poly')
        spyOn(c, 'circle')
        s.draw(c, new Transform2D())
        expect(c.poly).toHaveBeenCalled()
        expect(c.circle).toHaveBeenCalled()
    })
})