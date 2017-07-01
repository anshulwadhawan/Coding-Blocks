function hello(myval){
		console.log(this.bar);
		console.log(myval);
}

var obj1={
		// foo:hello,
		bar: "bar of obj1"
};
var obj2={
		// foo:hello,
		bar: "bar of obj2"
};

hello.call(obj1,"hi");	//first arg is this baaki args are passed to hello as its args
hello.call(obj2,"bye"); //here foo of obj1,obj2 may or may not be present 