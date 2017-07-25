/**
 * Created by anshul on 18/7/17.
 */
var selected=undefined;
var chats={};
$(function(){


    var socket=io();
    var username=undefined;
    $('#onloadbtn').click();

    $("#myModal").on("hidden.bs.modal", function () {

        if(username===undefined){
            alert('Enter a valid name');
            location.reload();
        }
    })

    $('#btn').click(function(){

        if(selected===undefined){
            alert("Please select an online user to send the message :)");
            return;
        }
        socket.emit('send_message',{
            from:username,
            fromimg: document.getElementById("dp").src,
            to:selected,
            input: $('#inp').val()
        })
        $('#inp').val(' ');

    });

    $("#inp").keyup(function(event){
        if(event.keyCode == 13){
            $("#btn").click();
        }
    });

    $("#enterusername").keyup(function(event){
        if(event.keyCode == 13){
            $("#submitbtn").click();
        }
    });

    $('#submitbtn').click(function(){

        console.log($("#enterusername").val());
        if($("#enterusername").val().length==0){
            alert('Enter a valid name');
            location.reload();
        }else{
            username=$('#enterusername').val();
            $('#name').html(username);
        }

        if(document.getElementById("uploadimage").files.length!==0) {

            var reader = new FileReader();
            reader.readAsDataURL(document.getElementById("uploadimage").files[0]);

            reader.onload = function (oFREvent) {
                console.log(oFREvent.target.result);
                document.getElementById("dp").src = oFREvent.target.result;
                socket.emit('user',{"username":username,"userdp": oFREvent.target.result});
            };
        }
        else{
            socket.emit('user',{"username":username,"userdp":'user-200.png' });
        }


    });

    socket.on('get',function(data) {

        if(data.to===username||data.from===username)
        {

            var msg;
            if(data.from===username)
             msg = '<div align="right" style="width: 100%"><div class="mymsg">'+data.input+'</div><img src="'+ document.getElementById("dp").src+'"></div>';
            else
                msg='<div style="width: 100%"><img src="'+ data.fromimg+'"><div class="otherusermsg">'+data.input+'</div></div>';

            var equal=data.to===username?"'"+data.from+"'":"'"+data.to+"'";
            if(chats[equal]===undefined){
                chats[equal]=msg;
            }else
            chats[equal]=msg+chats[equal];
            console.log(chats);
            $('.chat').html(chats[equal]);
            if(data.to!==username){
                if(selected!==undefined) {
                    $('[name='+selected+']').removeClass('selected');
                }
                selected=data.to;
                $('[name='+selected+']').addClass('selected');
            }else{
                if(selected!==undefined) {
                    $('[name='+selected+']').removeClass('selected');
                }
                selected=data.from;
                $('[name='+selected+']').addClass('selected');
            }
        }
    });

    socket.on('all',function(data) {

        for(var i=0;i<data.length;i++){
            var msg = '<li>' + data[i].user + " : " + data[i].input + '</li>';
            $('#message').append(msg);
        }
    });

    socket.on('activeusers',function(data) {
        var keys=Object.keys(data);
        $('#side-bar').html(' ');
        for(var i=0;i<keys.length;i++) {
            var value = data[keys[i]].username;
            if (value !== username) {
            $('#side-bar').append('<div id='+i+' class="chat-heads" name="'+value+'" onclick="fnc(this)"><img src='+data[keys[i]].userdp+'><div class ="username">' + value + '<img src="online.png" height="10px"></div></div>');
            }
        }
    });

});
function fnc(el){

    if(selected!==undefined) {
        $('[name='+selected+']').removeClass('selected');
    }
    selected=el.textContent;
    if(chats["'"+selected+"'"]===undefined){
        $('.chat').html(" ");
    }else{
        $('.chat').html(chats["'"+selected+"'"]);
    }

    $("#"+el.id).addClass('selected');

}