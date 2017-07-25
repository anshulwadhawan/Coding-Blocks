/**
 * Created by anshul on 14/7/17.
 */
$(function(){

    $.get('/getdata',function(data){
        for (var i = 0; i < data.length; i++) {
            var msg = '<li>' + data[i].user + " : " + data[i].input + '</li>';
            $('#message').append(msg);
        }
    });
    var socket=io();
    var username=prompt("Enter your name");
    $('#btn').click(function(){

        socket.emit('rec_message',{
            user:username,
            input: $('#inp').val()
        })

    });

    socket.on('get',function(data) {
        var msg = '<li>' + data.user + " : " + data.input + '</li>';
        $('#message').append(msg);
    });

    socket.on('all',function(data) {

        data.forEach(client => {
            var msg = '<li>' + client.user + " : " + client.input + '</li>';
        $('#message').append(msg);
        })
    });

    socket.emit('username',username);

    socket.on('getactive',function(data) {
        console.log(data);
    });
});
