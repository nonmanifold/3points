export default function createMockCanvas (width = 100, height = 100) {
    const mockCtx = {
        clearRect: jasmine.createSpy('clearRect'),
        save: jasmine.createSpy('save'),
        restore: jasmine.createSpy('restore'),
        arc: jasmine.createSpy('arc'),
        beginPath: jasmine.createSpy('beginPath'),
        stroke: jasmine.createSpy('stroke'),
        moveTo: jasmine.createSpy('moveTo'),
        lineTo: jasmine.createSpy('lineTo'),
        closePath: jasmine.createSpy('closePath'),
        fillText: jasmine.createSpy('fillText')
    }

    const mockCanvas = {
        getContext: function (type) {
            return mockCtx
        },
        width,
        height
    }
    spyOn(mockCanvas, 'getContext').and.callThrough()
    return { canvas: mockCanvas, ctx: mockCtx }
}