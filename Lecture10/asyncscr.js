function a(){
		console.log("a")
}
function b(d){
	function()
	
		setTimeout(function(a,c){
					a();
					c();
				}, 2000);
		console.log("b");
}
function c(){
		console.log("c");
}
function d(){
		console.log("d");
}
b(d);
