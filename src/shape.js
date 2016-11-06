import { Point2 } from './utils'

const COLOR_RED = 'rgb(255,0,0)'
const COLOR_BLUE = 'rgb(0,0,255)'
const COLOR_YELLOW = 'rgb(255,255,0)'
const RADIUS = 11.0
const RADIUS_SQUARED = RADIUS * RADIUS

const pointsAreNear = (a, b, tolerance) => {
    return ((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)) < tolerance
}

export  default class Shape {

    points = [] // I wish these were private fields, but for simplicity lets leave them as a public properties
    centerOfMass = null
    parallelogramArea = 0.0
    circleRadius = 0.0

    clear = () => {
        this.points.length = 0
        this.centerOfMass = null
        this.parallelogramArea = 0.0
        this.circleRadius = 0.0
    }

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

    move = (pointIdx, newPlace) => {
        if (! (pointIdx < 0 || pointIdx > this.points.length - 1)) {
            this.points[pointIdx] = newPlace
            this.setFourthPoint()
        }
    }

    setFourthPoint = () => {
        if (this.points.length < 3) {
            return
        }
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
        const info=[]
        for (let i = 0; i < Math.min(3, this.points.length); i ++) {
            canvas.circle(transform.world2view(this.points[i]), RADIUS, COLOR_RED)
            info.push(`${i} ${this.points[i].x}, ${this.points[i].y}`)
        }

        canvas.poly(this.points, transform.world2view, COLOR_BLUE)
        if (this.points.length > 3) {
            canvas.circle(transform.world2view(this.centerOfMass), transform.world2viewScale(this.circleRadius), COLOR_YELLOW)
            info.push(`parallelogram area ${this.parallelogramArea}`)
            info.push(`circle area ${this.parallelogramArea}`)
        }
        canvas.text(info)
    }

    getIdxAt = (p) => {
        for (let i = 0; i < Math.min(3, this.points.length); i ++) {
            if (pointsAreNear(p, this.points[i], RADIUS_SQUARED)) {
                return i
            }
        }
        return - 1
    }

    getCenterOfMass = () => this.centerOfMass

    getPoints = () => this.points

    getParallelogramArea = () => this.parallelogramArea

    getCircleRadius = () => this.circleRadius
}