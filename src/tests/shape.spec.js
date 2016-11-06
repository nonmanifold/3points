import Shape from '../shape'
import { Point2 } from '../utils'

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
        expect(s.points).toEqual([new Point2(0, 0), new Point2(1, 1), new Point2(2, 1), new Point2(1, 0)])

        const s1 = new Shape()
        s1.addPoint(new Point2(0, 0))
        s1.addPoint(new Point2(0, 1))
        s1.addPoint(new Point2(1, 1))
        expect(s1.points).toEqual([new Point2(0, 0), new Point2(0, 1), new Point2(1, 1), new Point2(1, 0)])
    })

    it('should calculate area of shape based on 3 points', () => {
        const s = new Shape()
        expect(s.parallelogramArea()).toBeCloseTo(0.0)
        s.addPoint(new Point2(0, 0))
        s.addPoint(new Point2(0, 1))
        s.addPoint(new Point2(1, 1))
        expect(s.parallelogramArea()).toBeCloseTo(1.0)
    })
})