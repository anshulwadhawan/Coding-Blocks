// function closure(){
// 		var temp=0;
// 		for(i=0;i<100;i++)
// 		{
// 				setTimeout(function(){console.log(temp);temp++;},2000)
// 		}
// }
// closure();

//or use iife

function proto(){
		for(let i=0;i<100;i++)
		{
				(function(i){
					setTimeout(function(){console.log(i)},2000)
				}(i))
		}
} 
proto();