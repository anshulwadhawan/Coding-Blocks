
//Immediately Invoked Function Definition

(function(){
		function public1(){
		console.log('I am inside IIFE')
		}

		function public2(){
		console.log('I am inside IIFE')
		}

		function private1(){
		console.log('I am inside IIFE')
		}

		function private2(){
		console.log('I am inside IIFE')
		}

		// window.main=public1;

		var functions={
				"public1":public1,
				"public2":public2
		}

		function gettowindow(){
				return functions;
		}

		window.main=gettowindow;

})();

console.log(main()['public1']());