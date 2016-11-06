export default class Scene {
    items = []

    add = (drawable) => {
        this.items.push(drawable)
    }

    each = (callback) => {
        for (let i = 0; i < this.items.length; i ++) {
            if (callback(this.items[i])) {
                return;
            }
        }
    }

    draw = (canvas, transform) => {
        this.each((item) => {
            item.draw(canvas, transform)
        })
    }
}