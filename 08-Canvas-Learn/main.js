const canvas = document.querySelector('#first-canvas-elem')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = 'BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10

let hue = 0
let isDrawing = false
let endX = 0
let endY = 0
let direction = true

function draw (e) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath()
  ctx.moveTo(endX, endY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  endX = e.offsetX
  endY = e.offsetY
  hue++
  if (hue >= 360) {
    hue = 0
  }

  if (ctx.lineWidth > 50 || ctx.lineWidth < 10) {
    direction = !direction
  }

  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

canvas.addEventListener('mousedown', e => {
  isDrawing = true
  endX = e.offsetX
  endY = e.offsetY
  draw(e)
})

canvas.addEventListener('mouseup', () => {
  isDrawing = false
})

canvas.addEventListener('mouseout', () => {
  isDrawing = false
})

canvas.addEventListener('mousemove', e => {
  if (!isDrawing) {
    return null
  } else {
    draw(e)
  }
})
