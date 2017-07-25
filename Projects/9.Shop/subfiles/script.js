/**
 * Created by anshul on 15/7/17.
 */

$.get('/getmaxid',function(data){
    orderid=parseInt(data[0]['MAX(OrderID)'])+1;
});



function addtocart(el){
    var obj={
        name:el.name,
        price:el.className,
        orderid:orderid
    }

    $.get('/add?toadd='+JSON.stringify(obj),function(data){
        console.log("Item added to cart");
        console.log(data);
    });

}
function showcart(myorderid){
    var tosearch=myorderid===undefined?orderid:myorderid;
    $.get('/display?currentid='+tosearch,function(data){

        var table=$('#table');
        var op=$('#output');
        table.html(" ");
        var total=0;
        table.append("<tr><th>Name</th><th>Quantity</th><th>Price</th></tr>");
        for(var i=0;i<data.length;i++) {
            total+=parseInt(data[i].Price);
            table.append("<tr><td>"+data[i].Name+"</td><td>"+data[i].Quantity+"</td><td>"+data[i].Price+"</td></tr>");
        }
        op.html(" ");
        // console.log(total);
        var statement=tosearch===orderid?'Total cart value is ':'You have paid ';
        op.append(statement+total);
        if(tosearch===orderid)
        op.append('<br><button id="orderbtn" onclick="ordernow()">Order Now !</button>');

    });
}

function search() {

    showcart($('#ip').val());

}

function ordernow(){

    alert("Your order ID is "+orderid);
    // $('#myModal').modal('hide');
    orderid++;

}