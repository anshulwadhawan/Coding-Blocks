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

app.use('/',express.static(path.join(__dirname,'subfiles')));

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.post('/insert',function(req,res){
    console.log(req.body);
    var query='insert into todos (task,done) values("'+req.body.todo+'",true);';
    sql.TodoList(query,function(data){
        res.render('index',{todo:data});
    })
})

app.listen(port,function(){
    console.log('Server is running at port number '+port);
})