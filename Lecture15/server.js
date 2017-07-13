/**
 * Created by anshul on 12/7/17.
 */
var express=require('express');
var app=express();
var path=require('path');
var port=4000||process.env.port;
var sql=require('./db.js');
var bp=require('body-parser');

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));


app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.use('/',express.static(path.join(__dirname,'subfiles')));

app.get('/todos/all',function(req,res){

    var query='select * from todos';
    sql.TodoList(query,function(data){
        res.send(data);
    })
})

app.get('/all',function(req,res){

    var query='select * from todos';
    sql.TodoList(query,function(data){
        res.render('index',{todo:data});
    })
})

app.post('/todos/insert',function(req,res){

    var query='insert into todos (task,done) values("'+req.body.todo+'",true);';
    sql.TodoList(query,function(data){
        res.send(data);
    })
})

app.post('/todos/update',function(req,res){

    var query='update todos set done='+req.body.done+' where id='+req.body.id;
    sql.TodoList(query,function(data){
        res.send(data);
    })

})

app.post('/todos/delete',function(req,res){
    var query='delete from todos where id='+req.body.id;
    sql.TodoList(query,function(data){
        res.send(data);
    })
})

app.listen(port,function(){
    console.log('Server is running at port number '+port);
})