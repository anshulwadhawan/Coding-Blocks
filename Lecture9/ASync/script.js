function b(url){
		console.log("B runs");
		ajax(url,function(data){console.log(data)})
		console.log("After B");
}

function ajax(url,callback)
{
		var k=getResponse();
		if(k!==undefined)callback(k);
}

b("hello");

function getResponse(){

		setTimeout(function(){return "Hello World";},2000)
		
}