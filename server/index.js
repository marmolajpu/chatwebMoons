const express = require('express');
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.APP_SERVER_PORT || 5000

const router = require('./router')

const {addUser, removeUser, getUser} = require('./users.js')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
       const {error, user} = addUser({id: socket.id, name:name, room:room})
       if(error) return callback(error)
       socket.join(user.room)
       socket.emit('message', {user: 'admin', text:`${user.name}, Bienvenido a la sala ${user.room}` })
       socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} se unio a la sala`})
       callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user:user.name, text:message})
        callback()
    })

    socket.on('disconnect', () =>{
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text:`${user.name} abandono la sala` })
        }
       
    })
})
server.listen(PORT, () => console.log(`Server started. Port: ${PORT}`));