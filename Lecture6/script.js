window.onload=function()
{
		var timeoutput=document.getElementById('time');
		var input=document.getElementById('ip');
		var button=document.getElementById('get');

		button.onclick=function()
		{
			var time=Date.now();
			var ipval=input.value;

			for(var i=1;i<=ipval;i++)
			{
					var output=document.getElementById('list');
					if(i%3==0&&i%5==0)
					{
							output.innerHTML+=('<li>'+"fizzbuzz"+'</li>');
					}
					else if(i%3==0)
					{
							output.innerHTML+=('<li>'+"fizz"+'</li>');
					}
					else if(i%5==0)
					{
							output.innerHTML+=('<li>'+"buzz"+'</li>');
					}
					else
					{
							output.innerHTML+=('<li>'+i+'</li>');
					}
			}
			time=Date.now()-time;
			timeoutput.innerHTML=time+"ms";
				
		}

		

};