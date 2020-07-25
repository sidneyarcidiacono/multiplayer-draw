let socket

function setup () {
  createCanvas(500, 500)
  background(51)
  noStroke()

  socket = io.connect('http://localhost:3000')
  socket.on('mouse', newDrawing)
}

function newDrawing ({x, y}) {
  noStroke()
  fill(255, 0, 100)
  ellipse(x, y, 60, 60)
}

function mouseDragged () {
  console.log(`Sending: ${mouseX}, ${mouseY}`)

  socket.emit('mouse', {x: mouseX, y: mouseY})
  fill(255)
  circle(mouseX, mouseY, 20)
}
