var todolist=[];
window.onload=function() {
	
	var inputvalue=document.getElementById('getValue');
	var addtodo=document.getElementById('done'); //button
	var outputvalue=document.getElementById('output');
	var i=0;

	var stdata=JSON.parse(localStorage.getItem("List"));

	if(stdata!=null)
	for(var t=0;t<stdata.length;t++)
	{
			todolist.push(stdata[t]);
			
			outputvalue.innerHTML+="<li onclick='strikethrough(this)' id=" + i + ">"+stdata[t].task+"</li>";
			if(stdata[t].done==true)
			{
					var item=document.getElementById(i);
					item.style.textDecoration = 'line-through';
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
			outputvalue.innerHTML+="<li onclick='strikethrough(this)' id=" + i + ">"+todolist[todolist.length-1].task+"</li>";
			i++;
	};
}
function strikethrough(el){
		if(todolist[el.id].done==false){
		todolist[el.id].done=true;
		localStorage.setItem("List",JSON.stringify(todolist));	
		el.style.textDecoration = 'line-through';
		console.log(el.id +" "+  todolist[el.id].done);
		}
		else{
				todolist[el.id].done=false;
				localStorage.setItem("List",JSON.stringify(todolist));
				el.style.textDecoration = 'none';
				console.log(el.id +" "+  todolist[el.id].done);
		}
};