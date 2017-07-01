//Q1
// function inner(){
// 		this.me="Satyam";
// }

// function outer(){
// 		console.log(this.me);
// }

// outer.call(inner());


//Q2
function hello(){
		function child1(){
			console.log(this.obj);
		}

		var x={
				"child":child1,
				"obj":"foo",
				"property":"bar"
		}

		// child1.call(x);
		x.child();
}
hello();