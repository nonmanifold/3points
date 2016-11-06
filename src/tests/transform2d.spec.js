import Transform2D from '../transform2d'
import { Point2 } from '../utils'
describe('Transform2D', () => {
    it('should translate screen to world 1:1', () => {
        const t = new Transform2D()
        expect(t.view2world(new Point2(1, 10))).toEqual(new Point2(1, 10))
        expect(t.view2world(new Point2(10, 1))).toEqual(new Point2(10, 1))
    })

    it('should translate world to screen 1:1', () => {
        const t = new Transform2D()
        expect(t.world2view(new Point2(1, 10))).toEqual(new Point2(1, 10))
        expect(t.world2view(new Point2(10, 1))).toEqual(new Point2(10, 1))
        expect(t.world2viewScale(10)).toEqual(10)
    })
})