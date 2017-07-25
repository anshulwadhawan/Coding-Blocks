/**
 * Created by anshul on 18/7/17.
 */
var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var socket=require('socket.io');
app.use('/',express.static('subfiles'));
var io=socket(server);
var PORT=process.env.PORT||4000;

var activeusers={};
io.on('connection',function (socket) {

    console.log("Connection established");

    socket.on('send_message',function(data){
        io.emit('get',data);
        // socket.emit('get',data);
    });

    socket.on('user',function(data){
        activeusers[socket.id]=data;
        io.emit('activeusers',activeusers);
    })

    socket.on('disconnect', function(){
        delete activeusers[socket.id];
        console.log('user disconnected');
        io.emit('activeusers',activeusers);
    });

})

server.listen(PORT,function () {
    console.log("Server is running on port "+PORT);
})