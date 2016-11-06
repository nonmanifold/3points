import { Point2 } from './utils'
export  default class Shape {
    points = []

    addPoint = (p) => {
        if (this.points.length < 3) {
            this.points.push(p)
            if (this.points.length === 3) {
                this.setFourthPoint()
            }
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

    setFourthPoint = () => {
        const A = this.points[0]
        const B = this.points[1]
        const C = this.points[2]
        const BA = new Point2(B.x - A.x, B.y - A.y)
        this.points[3] = new Point2(C.x - BA.x, C.y - BA.y)
    }
}