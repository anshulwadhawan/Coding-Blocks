// hello();  works
// nam();    does not work

var nam=function(){
		console.log("I am in Global Scope");
};

function hello(){
		console.log("Global Scope");
};	

// hello();   works
// nam();		works

var obj={
		x:hello, //function as a value to the key x
		y:"Execute"
}
// console.log(obj.x); //prints whole definition 
// console.log(obj.x()); //prints only the content as func is called

		// function parent(){
		// 		var x=12;
		// 		function child1(){					//to make it accessible outside declare it as- window.child1=function(){---}
		// 				console.log(x);
		// 		}
		// 		function child2(){
		// 				x=13;
		// 		}
		// 		child2();
		// 		child1();
		// }
		// parent();

function parent(){
		var x=12;
		function child1(child){					//to make it accessible outside declare it as- window.child1=function(){---}
				child();
		}
		function child2(){
				x=13;
				console.log(x);
		}
		child1(child2);
}
parent();