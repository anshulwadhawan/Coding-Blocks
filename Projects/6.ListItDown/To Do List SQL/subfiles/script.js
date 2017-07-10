$(function () {

    var count=0;

    refreshlist();

    $('#done').click(function(){

        // refreshlist();

        count++;
        var obj={
            "id":count,
            "task":$('#getValue').val(),
            "status":0
        }
        if($("#getValue").val()===0)return;

        $("#getValue").val("");

        $.get('/addData?todo='+JSON.stringify(obj),function(data){
            refreshlist();
        });



    });



});
function delet(el){
    $.get('/del?id='+el.id,function(data){
        // console.log(data);
        setoutput(data);
        updatesql(data);
    });


}

function toggle(el){

    $.get('/toggle?id='+el.id,function(data){
            // console.log(data);
    })


}
function refreshlist(){
    $.get('/refresh',function(data){
        // console.log(data);
        var output=$("#output");
        output.html(" ");
        count=0;
        // console.log(data);
        for(var i=1;i<=data.length;i++) {
            count++;
            data[i-1].id=i;
            if (data[i-1].status === 1) {
                output.append("<div><div class='text'><input type='checkbox' checked id=" + i + " onclick='toggle(this)'>" + data[i-1].task + "</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(i+1000) +" onclick='delet(this)'></i></div><br><br>");
            }
            else {
                output.append("<div><div class='text'><input type='checkbox' id=" + i + " onclick='toggle(this)'>" + data[i-1].task + "</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(i+1000) +" onclick='delet(this)'></i></div><br><br>");
            }
        }
        // console.log(output.html());
        updatesql(data);
    });
};

function setoutput(data){
    var output=$("#output");
    output.html(" ");
    count=0;
    // console.log(data);
    for(var i=1;i<=data.length;i++) {
        count++;
        data[i-1].id=i;
        if (data[i-1].status === 1) {
            output.append("<div><div class='text'><input type='checkbox' checked id=" + i + " onclick='toggle(this)'>" + data[i-1].task + "</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(i+1000) +" onclick='delet(this)'></i></div><br><br>");
        }
        else {
            output.append("<div><div class='text'><input type='checkbox' id=" + i + " onclick='toggle(this)'>" + data[i-1].task + "</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(i+1000) +" onclick='delet(this)'></i></div><br><br>");
        }
    }
}

function updatesql(data){
    $.get('/sqlupdate?list='+JSON.stringify(data),function(data){
        console.log(data);
    });
}
