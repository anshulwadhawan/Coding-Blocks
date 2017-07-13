function geturl(str){
    var str2='';
    for(var i=0;i<str.length;i++)
    {
        if(str.charAt(i)==' '){
            str2+='+';
        }
        else
            str2+=str.charAt(i);
    }
    return str2;
}
function search(el){

    var searchwhat=el.className==='fa fa-search btn btn-primary go1 gifs'?'gifs':'stickers';
    var input1=searchwhat==='gifs'?'.ip1':'.ip3';
    var input2=searchwhat==='gifs'?'.ip2':'.ip4';
    var textbox=$(input1);
    var limit=$(input2).val().length==0?5:parseInt($(input2).val());
    // console.log(searchwhat);
    var URL='http://api.giphy.com/v1/'+searchwhat+'/search?q='+geturl(textbox.val())+'&api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit='+limit;
    var output=searchwhat==='gifs'?'.op1':'.op2';
    $.ajax({url: URL, success: function(result) {
        console.log(result);
        $(output).html('');
        for (var i = 0; i < result.data.length; i++) {
            $(output).append("<a href='"+result.data[i].images.original.url+"' download> <video src='"+result.data[i].images.original.mp4 +"'  autoplay loop></a>");
        }
    }
    });
}
function surprise(el){
    var randomURL='http://api.giphy.com/v1/'+el.className+'/random?api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit=5';
    var output=el.className==='gifs'?'.op1':'.op2';
    $.ajax({
        url: randomURL, success: function (result) {
            console.log(result);
            $(output).html('');
            $(output).append("<a href='" + result.data.image_original_url + "' download><video src='" + result.data.image_mp4_url + "'  autoplay loop></a>");
        }
    });
}

function trending(el){

    var output=el.className==='gifs'?'.op1':'.op2';
    var input2=output==='.op1'?'.ip2':'.ip4';
    var limit=$('.ip2').val().length==0?5:parseInt($('.ip2').val());
    var URL='http://api.giphy.com/v1/'+el.className+'/trending?api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit='+limit;
    $.ajax({url: URL, success: function(result) {
        console.log(result);
        $(output).html('');
        for (var i = 0; i < result.data.length; i++) {
            $(output).append("<a href='"+result.data[i].images.original.url+"' download> <video src='"+result.data[i].images.original.mp4 +"' autoplay loop></a>");
        }
    }});
}
