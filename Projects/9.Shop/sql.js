/**
 * Created by anshul on 15/7/17.
 */
var mysql=require('mysql');

var dbconfig={
    host:'localhost',
    user:'anshul',
    password:'anshul',
    database:'shop'
}

function add(obj,cb){

    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    var query;
    connection.query('select * from cart where OrderID='+obj.orderid+' and Name="'+obj.name+'";',function(err,data){
        if(err)throw err;
        if(data.length===0){
            query='insert into cart values('+obj.orderid+',"'+obj.name+'",1,'+obj.price+');';
        }
        else{
            query='update cart set Quantity=Quantity+1,Price=Quantity*'+obj.price+' where OrderID='+obj.orderid+' and Name="'+obj.name+'";'
        }
        connection.query(query,function(err,data) {
        if(err)throw err;
        connection.query('select * from cart',function(err,data) {
            if(err) throw err;
            cb(data);
            connection.end();
        })
        })
    })
}
function show(currentid,cb) {
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('select * from cart where OrderID='+currentid+';', function (err, data) {
        if (err) throw err;
        cb(data);
        connection.end();

    })
}
function getmaxid(cb) {
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('select MAX(OrderID) from cart;', function (err, data) {
        if (err) throw err;
        cb(data);
        connection.end();
    })
}

module.exports={
    add,
    show,
    getmaxid
}