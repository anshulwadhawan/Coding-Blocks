/**
 * Created by anshul on 15/7/17.
 */
var express=require('express');
var app=express();
var path=require('path');
var port=4000||process.env.port;
var sql=require('./sql.js');
var bp=require('body-parser');

app.use('/',express.static(path.join(__dirname,'subfiles')));

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

app.get('/getmaxid',function(req,res){

    sql.getmaxid(function(data){
        res.send(data);
    });
})

app.get('/add',function(req,res){

    var obj=JSON.parse(req.query.toadd);

    sql.add(obj,function(data){
        res.send(data);
    });
})
app.get('/display',function(req,res){

    sql.show(req.query.currentid,function(data){
        res.send(data);
    });
})

app.listen(port,function(){
    console.log('Server is running at port number '+port);
})