
window.onload=function() {
	
	var todolist=[];
	var inputvalue=document.getElementById('getValue');
	var addtodo=document.getElementById('done'); //button
	var outputvalue=document.getElementById('output');
	var i=0;

	var stdata=JSON.parse(localStorage.getItem("List"));
	if(stdata!=null)
	for(var t=0;t<stdata.length;t++)
	{
			todolist.push(stdata[t]);
			
			if(stdata[t].done==true)
			{
				outputvalue.innerHTML+="<input type='checkbox' checked id=" + i + " onclick='strikethrough(this)'>"+stdata[t].task+"<br>";		
			}
			else{
					outputvalue.innerHTML+="<input type='checkbox' id=" + i + " onclick='strikethrough(this)'>"+stdata[t].task+"<br>";
			}
			i++;
			
	}

	addtodo.onclick=function(){

			var value=inputvalue.value;

			var obj={
					"task":value,
					"done":false
			};

			todolist.push(obj);

			localStorage.setItem("List",JSON.stringify(todolist));


			// console.log(todolist);
			// outputvalue.innerHTML="";
			// for(var i=0;i<todolist.length;i++)
			outputvalue.innerHTML+="<input type='checkbox' id=" + i + " onclick='strikethrough(this,todolist)' >"+todolist[todolist.length-1].task+"<br>";
			i++;
	};
}
function strikethrough(el,todolist){
		if(todolist[el.id].done==false){
		todolist[el.id].done=true;
		localStorage.setItem("List",JSON.stringify(todolist));	
		document.getElementById(el.id).checked=true;
		console.log(el.id +" "+  todolist[el.id].done);
		}
		else{
				todolist[el.id].done=false;
				localStorage.setItem("List",JSON.stringify(todolist));
				document.getElementById(el.id).checked=false;
				console.log(el.id +" "+  todolist[el.id].done);
		}
	};