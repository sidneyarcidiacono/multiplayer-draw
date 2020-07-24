let socket

function setup () {
  createCanvas(500, 500)
  background(51)

  socket = io.connect('http://localhost:3000')
}

function draw () {
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 60, 60)
}
