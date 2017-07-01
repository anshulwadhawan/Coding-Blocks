window.onload=function(){
		var input1=document.getElementById('input1');
		var button=document.getElementById('get');
		var value=document.getElementById('value');

		button.onclick=function(){
				var v=input1.value;
				// console.log(val);
				value.innerHTML=v;
				// value.innerHTML+=v;
				
		};
		// console.log(input1);
}
