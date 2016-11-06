import Viewport from '../viewport'
describe('viewport', () => {
    it('should exist', () => {
        expect(Viewport).toBeDefined()
    })

    it('should clear() canvas prior drawing', () => {
        const clear = jasmine.createSpy('clear')
        const v = new Viewport({ clear })
        v.render()
        expect(clear).toHaveBeenCalled()
    })
})