import { debug, Point2 } from './utils'
import Canvas from './canvas'
import Viewport from './viewport'
import Renderer from './renderer'
import Transform2D from './transform2d'
import Shape from './shape'
function main () {

    const canvasElm = document.getElementById('canvas')

    if (canvasElm.getContext == undefined) {
        debug('unsupported browser')
        return
    }

    const canvas = new Canvas(canvasElm)

    const shape = new Shape()

    const view = new Viewport(shape, canvas, new Transform2D())
    const render = new Renderer(view)
    render.start()

    function updateCanvasDimensions () {
        canvasElm.width = window.innerWidth
        canvasElm.height = window.innerHeight
        canvas.setDimensions(canvasElm.width, canvasElm.height)
    }

    updateCanvasDimensions()
    window.addEventListener('resize', updateCanvasDimensions)
    document.getElementById('reset').addEventListener('click', () => {
        shape.clear()
    })

    document.getElementById('about').addEventListener('click', () => {
        const infoBlock = document.getElementById('about-info')
        infoBlock.style.display = infoBlock.style.display === 'block' ? 'none' : 'block'
    })

}
main()