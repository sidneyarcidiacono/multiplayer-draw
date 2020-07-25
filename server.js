const express = require('express')

const app = express()
const server = app.listen(process.env.PORT || 3000)
const io = require('socket.io')(server)

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

io.on('connection', socket => {
  socket.on('mouse', data => {
    socket.broadcast.emit('mouse', data)
  })
})
console.log('My socket server is running')

