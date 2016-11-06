import { debug, Point2 } from './utils'
import Canvas from './canvas'
import Viewport from './viewport'
import Renderer from './renderer'
import Transform2D from './transform2d'
import Scene from './scene'
import Shape from './shape'
const canvas = new Canvas('canvas')
const scene = new Scene()
const view = new Viewport(scene, canvas, new Transform2D())
const render = new Renderer(view)
render.start()

const shape = new Shape()
shape.addPoint(new Point2(0, 0))
shape.addPoint(new Point2(0, 1))
shape.addPoint(new Point2(1, 1))

scene.add(shape)