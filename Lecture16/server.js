/**
 * Created by anshul on 14/7/17.
 */
var express=require('express');
var app=express();
var http=require('http');
var server=http.createServer(app);
var socket=require('socket.io');
app.use('/',express.static('subfiles'));
var io=socket(server);

var chats=[];
var activeusers={};
io.on('connection',function (socket) {

    console.log("Connection established");

    socket.on('rec_message',function(data){
        chats.push(data);
        io.emit('get',data);
    });

    socket.emit('all',chats);

    socket.on('username',function(data){
        activeusers[socket.id]=data;
    })

    socket.on('disconnect', function(){

        delete activeusers[socket.id];
        io.emit('getactive',activeusers);
        // console.log(activeusers);
        console.log('user disconnected');
    });
})

app.get('/getdata',function(req,res){

    res.send(chats);

})

server.listen(4000,function () {
    console.log("Server is running on port 4000");
})