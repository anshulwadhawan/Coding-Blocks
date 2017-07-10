/**
 * Created by anshul on 7/7/17.
 */
/**
 * Created by anshul on 7/7/17.
 */
/**
 * Created by anshul on 7/7/17.
 */
var express=require('express');

var app=express();
var todolist=[];

// app.use('/',express.static('public_static'));
app.get('/',function(req,res){
    res.send("Welcome to the to do list");
})

app.get('/push',function(req,res){
    todolist.push(req.query.task);
    res.send(req.query.task+" added");
})
app.get('/display',function(req,res){
    res.send(todolist);
    // res.send("Hello World 2");
})


app.listen(4000||process.env.port,function (response,err) {
    if(err)throw err;
    console.log("Server is running on port 4000")
})
