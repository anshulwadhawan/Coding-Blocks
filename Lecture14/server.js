/**
 * Created by anshul on 9/7/17.
 */
var express=require('express');
var app=express();
var bp = require('body-parser');
var sql=require('./sql.js');

app.use('/',express.static('public_static'));

app.use(bp.json());
app.use(bp.urlencoded(({ extended: true })));

var todolist=[{"task":1},{"task":2},{"task":3}];

app.post('/todos/post',function(req,res){
    sql.update(req.body.id,function(data){
        res.send(data);
    });

})


app.get('/todos/get',function(req,res){
    sql.get(function(data){
        // res.send(data);
        console.log(data);
    });


});

app.listen(4000||process.env.port,function (response,err) {
    if(err)throw err;
    console.log("Server is running on port 4000");
});