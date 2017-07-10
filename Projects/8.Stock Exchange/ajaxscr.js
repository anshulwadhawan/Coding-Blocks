$(function(){

        var URL='https://www.quandl.com/api/v3/datasets.json?database_code=NSE&per_page=100&sort_by=id&page=1&api_key=zpohNWNg3JrhydqDwyny';
        $.ajax({url: URL, success: function(result){
            console.log(result);
        }});



})

