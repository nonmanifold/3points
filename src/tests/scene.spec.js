import Scene from '../scene'
describe('Scene', () => {

    it('should delegate drawing to drawable', () => {
        const s = new Scene()
        const draw = jasmine.createSpy('drawable')
        const canvas = {}
        s.add({ draw })
        s.draw(canvas)
        expect(draw).toHaveBeenCalledWith(canvas)
    })
})