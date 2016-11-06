import Viewport from '../viewport'
import Scene from '../scene'
import Transform2D from '../transform2d'
describe('viewport', () => {
    it('should exist', () => {
        expect(Viewport).toBeDefined()
    })

    it('should clear() canvas prior drawing', () => {
        const clear = jasmine.createSpy('clear')
        const v = new Viewport(new Scene(), { clear }, new Transform2D())
        v.render()
        expect(clear).toHaveBeenCalled()
    })
})