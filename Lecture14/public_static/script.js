/**
 * Created by anshul on 9/7/17.
 */
$(function(){

    $('#btn').click(function(){

        $.get({url:'/todos/get',success:function(data){
            console.log(data);
        }});

        $.post('/todos/post',{id:10},function(data){
            console.log(data);
        });

    });

});