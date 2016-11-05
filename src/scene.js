export default class Scene {
    items = []
    draw = (canvas) => {
        for (let i = 0; i < this.items.length; i ++) {
            this.items[i].draw(canvas)
        }
    }
}