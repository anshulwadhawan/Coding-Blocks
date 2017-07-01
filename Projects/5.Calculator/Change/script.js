window.onload=function() {
	
	var output=document.getElementById("screen");
	var btnplus=document.getElementById("b33");
	var btnminus=document.getElementById("b43");
	var btnmultiply=document.getElementById("b23");
	var btndivide=document.getElementById("b13");
	var btneq=document.getElementById("b01");
	var btnclr=document.getElementById("b41");

	var op1;
	var op2;
	var op;
	var start;



	// btn0.onclick=function(){
	// 	output.innerHTML+=0+"";
	// };
	// btn1.onclick=function(){
	// 	output.innerHTML+=1+"";
	// };
	// btn2.onclick=function(){
	// 	output.innerHTML+=2+"";
	// };
	// btn3.onclick=function(){
	// 	output.innerHTML+=3+"";
	// };
	// btn4.onclick=function(){
	// 	output.innerHTML+=4+"";
	// };
	// btn5.onclick=function(){
	// 	output.innerHTML+=5+"";
	// };
	// btn6.onclick=function(){
	// 	output.innerHTML+=6+"";
	// };
	// btn7.onclick=function(){
	// 	output.innerHTML+=7+"";
	// };
	// btn8.onclick=function(){
	// 	output.innerHTML+=8+"";
	// };
	// btn9.onclick=function(){
	// 	output.innerHTML+=9+"";
	// };
	// btndot.onclick=function(){
	// 	output.innerHTML+=".";
	// };
	btnplus.onclick=function(){
			op1=parseFloat(output.innerHTML);
			output.innerHTML+="+";
			start=output.innerHTML.length;
			op="+";
	};
	btnminus.onclick=function(){
			op1=parseFloat(output.innerHTML);
			if(output.innerHTML.length==0)
			{
					output.innerHTML="-";
			}
			else
			output.innerHTML+="-";
			start=output.innerHTML.length;
		
			op="-";
	};
	btnmultiply.onclick=function(){
			op1=parseFloat(output.innerHTML);
			console.log(op1);
			output.innerHTML+="x";
			start=output.innerHTML.length;
			op="*";
	};
	btndivide.onclick=function(){
			op1=parseFloat(output.innerHTML);
			output.innerHTML+="/";
			start=output.innerHTML.length;
			op="/";
	};
	btneq.onclick=function(){
		op2=parseFloat(output.innerHTML.substring(start));
		if(op=="+")
		{
				output.innerHTML=op1+op2+"";
				op1=parseFloat(output.innerHTML);
		}
		else if(op=="-")
		{
				output.innerHTML=(op1-op2)+"";
				op1=parseFloat(output.innerHTML);
		}
		else if(op=="/")
		{
				output.innerHTML=(op1/op2)+"";
				op1=parseFloat(output.innerHTML);
		}
		else
		{
				output.innerHTML=(op1*op2)+"";
				op1=parseFloat(output.innerHTML);	
		}
	};
	btnclr.onclick=function(){
			output.innerHTML="";
	}
};
function enter(el)
	{
			// console.log(el.id);
			var output=document.getElementById("screen");
			output.innerHTML+=el.id;

	};