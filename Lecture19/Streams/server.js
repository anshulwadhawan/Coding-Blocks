var express=require('express');

var app=express();

var fs=require('fs');

var book=fs.createReadStream('./book.txt');
var copybook=fs.createWriteStream('./copybook.txt');

var dataLength=0;

console.log(book.toString());
// book.pipe(copybook);


book.on('data',function(chunk){
    dataLength+=chunk.length;
    // console.log(chunk)
})

book.on('end',function(){
    // console.log(dataLength);
    // console.log(book.toString().length);
})

app.listen('4000',function(){
    console.log('Server is running on port 4000');
})