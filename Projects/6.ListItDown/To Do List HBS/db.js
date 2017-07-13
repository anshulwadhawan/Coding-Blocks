/**
 * Created by anshul on 12/7/17.
 */
var mysql=require('mysql');

var dbconfig={
    host:'localhost',
    user:'anshul',
    password:'anshul',
    database:'lecture15db'
}

function TodoList(query,cb,params){
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query(query,function(err,data){
        if(err)throw err;
        connection.query('select * from todos',function(err,data) {
            cb(data);
            connection.end();
        })
    })
}

module.exports={
    TodoList
}