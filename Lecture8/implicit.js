var bar="Global Bar";

var x ={
		"foo":foo,
		"bar":"bar"
};

function foo(){
	console.log(this.bar);
}

foo();
x.foo();

