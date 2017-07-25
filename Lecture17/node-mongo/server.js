/**
 * Created by anshul on 16/7/17.
 */

var express=require('express');
var port=4000||process.env.port;
var database=require('./database.js');
var app=express();
var bp=require('body-parser');
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use('/',express.static('subfiles'));

app.post('/todos/insert',function(req,res){
    database.insertToDo(req.body.todo,function(data){
        res.send(data);
    })
})

app.get('/todos/all',function(req,res){
    database.findToDo(function(data){
        res.send(data);
    })
})

database.connectDB(function(){
    app.listen(port,function(){
        console.log("Server is running at port "+port);
    })
})



