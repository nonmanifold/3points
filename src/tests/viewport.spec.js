import Viewport from '../viewport'
import Transform2D from '../transform2d'
import Shape from '../shape'
describe('viewport', () => {
    it('should exist', () => {
        expect(Viewport).toBeDefined()
    })

    it('should clear() canvas prior drawing', () => {
        const clear = jasmine.createSpy('clear')
        const v = new Viewport(new Shape(), {
            clear,
            poly: () => {
            },
            text: () => {
            },
            canvas: {
                addEventListener: () => {
                }
            }
        }, new Transform2D())
        v.render()
        expect(clear).toHaveBeenCalled()
    })
})