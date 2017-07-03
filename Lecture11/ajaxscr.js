$(function(){

	var URL='http://loklak.org/api/search.json?timezoneOffset=-330&q=amitabh+bachchan';

	 $.ajax({url: URL, success: function(result){
	 	// console.log(result);
	 	for(var i=0;i<result.statuses.length;i++)
	 	{
	 			// console.log(users[i]);
	 			$("#output").append('<img src='+result.statuses[i].user.profile_image_url_https+'>');
	 			// console.log(result.statuses[i].user.profile_image_url_https);
	 	}	
        // $("#output").html(result);
    }});


});