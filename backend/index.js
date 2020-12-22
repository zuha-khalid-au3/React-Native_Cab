const express =require('express');
const app = express();
const server = require("http").createServer(app);
//const io = require("socket.io")(server);
const io = require('socket.io')(server);
const port= 3000;

io.on("connection",socket => {
    console.log("Connected");
    socket.on("chat message",msg => {
        console.log(msg);
        io.emit("chat message",msg);
    })
});



server.listen(port,()=>
    console.log('Server running on port: '+ port));

// var express   = require('express');
// var app       = express();

// // app.use/routes/etc...

// var server    = app.listen(3033);
// var io        = require('socket.io')(server);

// io.sockets.on('connection', function (socket) {
// console.log('Server')
// });