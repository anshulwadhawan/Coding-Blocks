$(function(){

	var btn=$('#btn');
	var box=$('#box');

	btn.click(function() {
		box.animate({
				height: '-=200px',
       			width: '-=200px',
       			opacity :0.25
		});
	});



});