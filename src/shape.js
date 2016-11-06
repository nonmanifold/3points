import { Point2 } from './utils'
export  default class Shape {

    points = [] // I wish these to be private fields, but for simplicity lets leave it as a public property
    centerOfMass = null
    parallelogramArea = 0.0
    circleRadius = 0.0

    addPoint = (p) => {
        if (this.points.length < 3) {
            this.points.push(p)
            if (this.points.length === 3) {
                this.setFourthPoint()
            }
        }
    }

    computeParallelogramArea = () => {
        if (this.points.length < 3) {
            return 0.0
        } else {
            const A = this.points[0]
            const B = this.points[1]
            const C = this.points[2]
            // basically triangle area *2
            return Math.abs(A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y))
        }
    }

    setFourthPoint = () => {
        const A = this.points[0]
        const B = this.points[1]
        const C = this.points[2]
        const BA = new Point2(B.x - A.x, B.y - A.y)
        const D = new Point2(C.x - BA.x, C.y - BA.y)
        this.points[3] = D
        this.centerOfMass = new Point2((A.x + C.x) / 2, (B.y + D.y) / 2)
        this.parallelogramArea = this.computeParallelogramArea()
        this.circleRadius = Math.sqrt(this.parallelogramArea / Math.PI)
    }

    draw = (canvas, transform) => {

    }

    getCenterOfMass = () => this.centerOfMass

    getPoints = () => this.points

    getParallelogramArea = () => this.parallelogramArea

    getCircleRadius = () => this.circleRadius
}