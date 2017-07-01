window.onload=function() {
	
	var inputvalue=document.getElementById('getValue');
	var addtodo=document.getElementById('done'); 
	var outputvalue=document.getElementById('output');

	refreshlist();

	addtodo.onclick=function(){

			var value=inputvalue.value;

			inputvalue.value="";	

			if(value.length==0)return;

			var obj={
					"task":value,
					"done":false
			};

			var todolist=JSON.parse(localStorage.getItem("List"));
			if(todolist!=null)
			todolist.push(obj);
			else
			{
					todolist=[obj];
			}

			localStorage.setItem("List",JSON.stringify(todolist));

			refreshlist();
	};
	
}
function strikethrough(el){
		var todolist=JSON.parse(localStorage.getItem("List"));
		if(todolist[el.id].done==false){
		todolist[el.id].done=true;
		localStorage.setItem("List",JSON.stringify(todolist));	
		document.getElementById(el.id).checked=true;
		}
		else{
				todolist[el.id].done=false;
				localStorage.setItem("List",JSON.stringify(todolist));
				document.getElementById(el.id).checked=false;
		}
};

function delet(el){
		var index=el.id-1000;
		var stdata=JSON.parse(localStorage.getItem("List"));
		stdata.splice(index,1);
		localStorage.setItem("List",JSON.stringify(stdata));
		refreshlist();

}

function delselected(){
		var updatedlist=[];
		var stdata=JSON.parse(localStorage.getItem("List"));
		for(var i=0;i<stdata.length;i++)
		{
				if(stdata[i].done==false){
						updatedlist.push(stdata[i]);
				}
		}
		localStorage.setItem("List", JSON.stringify(updatedlist));
		refreshlist();
}

function refreshlist(){
	var stdata=JSON.parse(localStorage.getItem("List"));
	var outputvalue=document.getElementById('output');

	outputvalue.innerHTML="";

	if(stdata!=null)
	for(var t=0;t<stdata.length;t++)
	{
			
			if(stdata[t].done==true)
			{
				outputvalue.innerHTML+="<div><div class='text'><input type='checkbox' checked id=" + t + " onclick='strikethrough(this)'>"+stdata[t].task+"</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(t+1000) +" onclick='delet(this)' ></i></div><br><br>";		
			}
			else{
				outputvalue.innerHTML+="<div><div class='text'><input type='checkbox' id=" + t + " onclick='strikethrough(this)'>"+stdata[t].task+"</div><i class='fa fa-minus-circle' aria-hidden='true' id="+(t+1000) +" onclick='delet(this)'></i></div><br><br>";
			}
			
	}
}