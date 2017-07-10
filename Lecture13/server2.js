/**
 * Created by anshul on 7/7/17.
 */
var express=require('express');

var app=express();

var todolist=[];

app.use('/',express.static('public_static'));

app.get('/getData',function(req,res){
        todolist.push(req.query.todo);
        res.send(todolist);
})
app.listen(4000||process.env.port,function (response,err) {
    if(err)throw err;
    console.log("Server is running on port 4000");
})
