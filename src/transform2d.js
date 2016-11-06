import { Point2 } from './utils'
export default class Transform2D {

    world2view = (world) => {
        return new Point2(world.x, world.y)
    }

    view2world = (view) => {
        return new Point2(view.x, view.y)
    }

    world2viewScale = (length) => length

}