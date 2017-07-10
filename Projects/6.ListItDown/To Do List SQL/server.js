/**
 * Created by anshul on 7/7/17.
 */
var express=require('express');

var app=express();

var bp = require('body-parser');
var sql=require('./sql.js');

app.use(bp.json());
app.use(bp.urlencoded(({ extended: true })));

app.use('/',express.static('subfiles'));

var todolist=[];

app.get('/addData',function(req,res){
    var obj=JSON.parse(req.query.todo);
    todolist.push(obj);

    sql.add(obj,function(data){res.send("")});
})

app.get('/del',function(req,res){

    sql.remove(req.query.id-1000,function(data){
        res.send(data);
    });
})

app.get('/refresh',function(req,res) {

    sql.get(function (data) {
        // console.log(data);
        res.send(data);

    });

})
app.get('/sqlupdate',function(req,res) {
    var list=JSON.parse(req.query.list);
    todolist = [];
    for (var i = 0; i < list.length; i++) {
        todolist.push(list[i]);
    }
    sql.tableup(list,function(data){
        res.send(data);
    });

})


app.get('/toggle',function(req,res){

    sql.tog(req.query.id,function(data){
            res.send(data);
    });

})


app.listen(4000||process.env.port,function (response,err) {
    if(err)throw err;
    console.log("Server is running on port 4000");
})
