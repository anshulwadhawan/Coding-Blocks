/**
 * Created by anshul on 7/7/17.
 */
var express=require('express');
// console.log(express);

var app=express();
// var todolist=[];

// app.use('/',express.static('public_static'));

app.get('/',function(req,res){
        res.send("Hello World");
})
app.get('/page2',function(req,res){
    res.send(req.query);
    // res.send("Hello World 2");
})


app.listen(4000||process.env.port,function (response,err) {
    if(err)throw err;
    console.log("Server is running on port 4000")
})
