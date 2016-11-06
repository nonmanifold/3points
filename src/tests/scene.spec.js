import Scene from '../scene'

describe('Scene', () => {

    it('should delegate drawing to drawable', () => {
        const s = new Scene()
        const draw = jasmine.createSpy('drawable')
        const canvas = {}
        const transform = {}
        s.add({ draw })
        s.draw(canvas, transform)
        expect(draw).toHaveBeenCalledWith(canvas, transform)
    })
})