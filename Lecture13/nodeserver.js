/**
 * Created by anshul on 7/7/17.
 */
var http=require('http');
var port=5000;

function requesthandler(req,res){
        res.end("hello world");
}

var server=http.createServer(requesthandler);

server.listen(port,function(err) {
    if(err)throw err;
    console.log("Server is running on port "+port);
})