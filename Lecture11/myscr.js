$(document).ready(function (){

	// console.log('Document is ready now');
	var getText=$('#getText');
	var btn=$('#enter');
	var op=$('#output');
	var preval="";

	btn.click(function() {
		
		// preval+="<li>"+getText.val()+"</li>";
		// op.text(preval);    //.text()
		// op.html(preval);
		// console.log(op.html());

		op.append("<li>"+getText.val()+"</li>");

	});

});
// console.log('Document is not ready');