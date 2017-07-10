/**
 * Created by anshul on 7/7/17.
 */
$(function () {

    $('#btn').click(function(){
        console.log($("#textbox").text());
        $.get('/getData?todo='+$("#textbox").val(),function(data){
               $("#output").html(data);
        })
    })
});