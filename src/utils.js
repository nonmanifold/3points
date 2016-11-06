export function debug (args) {
    if (typeof(console) !== 'undefined' && console != null) {
        console.log(args);
    }
}

export function Point2 (x, y) {
    this.x = parseInt(x)
    this.y = parseInt(y)
}

export function getLocalMouse (e) {
    if (e.touches != undefined && e.touches[0] != undefined) {
        const touch = e.touches[0]
        return new Point2(touch.pageX, touch.pageY)
    }
    if (e.offsetX) {
        return new Point2(e.offsetX, e.offsetY)
    } else if (e.layerX) {
        return new Point2(e.layerX, e.layerY)
    } else {
        return new Point2(- 1, - 1)
    }
}