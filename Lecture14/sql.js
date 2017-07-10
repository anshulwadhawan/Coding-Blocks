/**
 * Created by anshul on 9/7/17.
 */
var mysql=require('mysql');

var dbconfig={
    host     : 'localhost',
    user     : 'anshul',
    password : 'anshul',
    database : 'newdb'
}

function getTodos(cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("SqlDB Connected");
    connection.connect();
    connection.query('select * from todos',function(err,rows,fields){
        if(err)throw err;
        cb(rows);
    })
}

function updateTodos(id,cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('update todos set done=10 where id='+id,function(err,rows,fields){
        if(err)throw err;
        console.log("Updated row number "+id);

        connection.query('select * from todos',function(err,rows,fields){
            if(err)throw err;
            cb(rows);
        })

    })
}


module.exports={
    get:getTodos,
    update:updateTodos
}

