import { debug, Point2 } from './utils'
import Canvas from './canvas'
import Viewport from './viewport'
import Renderer from './renderer'
import Transform2D from './transform2d'
import Scene from './scene'
import Shape from './shape'
const canvasElm=document.getElementById('canvas')
const canvas = new Canvas(canvasElm)
const scene = new Scene()
const view = new Viewport(scene, canvas, new Transform2D())
const render = new Renderer(view)
render.start()

const shape = new Shape()
shape.addPoint(new Point2(10, 50))
shape.addPoint(new Point2(10, 300))
shape.addPoint(new Point2(300, 100))

scene.add(shape)
updateCanvasDimensions()
window.addEventListener('resize', updateCanvasDimensions)
function updateCanvasDimensions() {
    canvasElm.width=window.innerWidth
    canvasElm.height=window.innerHeight
    canvas.setDimensions(canvasElm.width, canvasElm.height)
}