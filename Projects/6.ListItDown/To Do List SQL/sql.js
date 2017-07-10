/**
 * Created by anshul on 9/7/17.
 */
var mysql=require('mysql');

var dbconfig={
    host     : 'localhost',
    user     : 'anshul',
    password : 'anshul',
    database : 'todoDB'
}

function getToDos(cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('select * from todos;',function(err,rows,fields){
        if(err)throw err;
        cb(rows);
    })
}

function addToDo(obj,cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('insert into todos values ('+obj.id +', "'+obj.task +'", '+obj.status +');',function(err,rows,fields){
        if(err)throw err;


        connection.query('select * from todos;',function(err,rows,fields){
            if(err)throw err;
            cb(rows);
        })
    })
}

function updateTodos(id,cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('update todos set done=10 where id='+id,function(err,rows,fields){
        if(err)throw err;


        connection.query('select * from todos;',function(err,rows,fields){
            if(err)throw err;
            cb(rows);
        })

    })
}

function del(id,cb){
    // console.log('hi');
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query("delete from todos where id="+id+";",function(err,rows,fields){
        if(err)throw err;
        console.log("Item having ID "+id+"deleted");
        connection.query('select * from todos;',function(err,rows,fields){
            if(err)throw err;
            cb(rows);
        })
    })

}

function tableupdate(list,cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('delete from todos',function(err,rows,fields){
        for(var i=0;i<list.length;i++) {
            connection.query('insert into todos values (' + list[i].id + ', "' + list[i].task + '", ' + list[i].status + ');', function (err, rows, fields) {
                if (err)throw err;
                })
            }
        connection.query('select * from todos;',function(err,rows,fields){
            if(err)throw err;
            cb(rows);
        })

    })

}

function toggle(id,cb){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();

    connection.query('select status from todos where id='+id+";",function(err,rows,fields){
        if(err)throw err;
            var currentstatus=rows[0].status;
            var newstatus;
            currentstatus==0?newstatus=1:newstatus=0;
            connection.query('update todos set status='+newstatus+' where id='+id+";",function(err,rows,fields){
                if(err)throw err;
                connection.query('select * from todos;',function(err,rows,fields){
                    if(err)throw err;
                    cb(rows);
                })
            })
    })

}

module.exports={
    add:addToDo,
    remove:del,
    get:getToDos,
    update:updateTodos,
    tableup:tableupdate,
    tog:toggle
}

