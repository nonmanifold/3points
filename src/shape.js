export  default class Shape {
    points = []

    addPoint = (p) => {
        if (this.points.length < 3) {
            this.points.push(p)
        }
    }

    parallelogramArea = () => {
        if (this.points.length < 3) {
            return 0
        } else {
            const A = this.points[0]
            const B = this.points[1]
            const C = this.points[2]
            // basically triangle area *2
            return Math.abs(A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y))
        }
    }

    draw = (canvas, transform) => {

    }
}