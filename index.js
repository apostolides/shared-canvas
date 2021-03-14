const express = require('express');
const app = express();
const server = app.listen(3000);

const socket_io = require('socket.io');
var io = socket_io(server);

io.sockets.on('connection',(socket)=>{
  let client_id = socket.id;
  console.log(`[*] New client: ${client_id}`);
  socket.on('data',(data)=>{
    socket.broadcast.emit('data',data);
  });
  socket.on('chat',(data)=>{
    io.emit('chat',data);
  });
  socket.on('clear',(data)=>{
    io.emit('clear',data);
  });
  socket.on('disconnect',()=>{
    console.log(`[*] Client: ${client_id} disconnected`);
  });
});

app.use(express.static('public'));

app.get("/",(req,res)=>{
  res.sendFile('index.html');
});
