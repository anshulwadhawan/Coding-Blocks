Array.prototype.mymap=function(def){
	var newarr=[];
	for(var i=0;i<this.length;i++)
	{
			newarr.push(def(this[i]));
	}
	console.log(newarr);
}

var arr=[1,2,3,4];
arr.mymap(function(x){return x*x*x;});