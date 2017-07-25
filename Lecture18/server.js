/**
 * Created by anshul on 19/7/17.
 */
var express=require('express');
var app=express();

var route={
    secure:require('./route/secure.js'),
    notsecure:require('./route/notsecure.js')
}

app.use('/secure',route.secure);
app.use('/notsecure',route.notsecure);

app.listen('4000',function(){
    console.log('Server is running on port 4000');
})