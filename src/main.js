import { debug } from './utils'
import Canvas from './canvas'
import Viewport from './viewport'
import Renderer from './renderer'
const canvas = new Canvas('canvas')
const view = new Viewport(canvas)
const render = new Renderer(view)
render.start()