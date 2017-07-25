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

    var searchwhat='stickers';
    var input1='.ip3';
    var input2='.ip4';
    var textbox=$(input1);
    var obj=JSON.parse(localStorage.getItem('stickers'));
    var limit=$(input2).val().length==0?5:parseInt($(input2).val());
    var URL='http://api.giphy.com/v1/'+searchwhat+'/search?q='+geturl(textbox.val())+'&api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit='+limit;
    var output='.op2';
    var flag;
    $.ajax({url: URL, success: function(result) {
        console.log(result);
        $(output).html('<br><br>');
        for (var i = 0; i < result.data.length; i++) {
            var op='.op2';
            flag=0;
            for(var key in obj) {
                var value = obj[key];
                for(var j=0;j<value.length;j++){
                    if(value[j]===result.data[i].images.original.mp4){
                        op="<div class='container' onMouseOver='f1(this)' onMouseOut='f2(this)'><a href='"+result.data[i].images.original.url+"' download> <video poster='loader.gif' src='"+result.data[i].images.original.mp4 +"' autoplay loop></a><div class='emojibar'>";
                        op+="<div style='width: 100%' align='center'><img name='"+key+"' src='"+key+".gif'></div></div></div>";
                        $(output).append(op);
                        flag=1;
                        break;
                    }
                }
            }
            if(flag===0)
                $(output).append("<div class='container' onMouseOver='f1(this)' onMouseOut='f2(this)'><a href='"+result.data[i].images.original.url+"' download> <video poster='loader.gif' src='"+result.data[i].images.original.mp4 +"' autoplay loop></a><div class='emojibar'><div style='width: 100%' align='center'>" +
                    "<img onclick='addtofavs(this)' src='like.gif' name='like'><img onclick='addtofavs(this)' name='love' src='love.gif'><img onclick='addtofavs(this)' name='haha' src='haha.gif'><img onclick='addtofavs(this)' name='wow' src='wow.gif'><img onclick='addtofavs(this)' name='sad' src='sad.gif'>" +
                    "<img onclick='addtofavs(this)' name='angry' src='angry.gif'></div>" +
                    "</div>"+
                    "</div>");
        }

    }
    });
}


function surprise(el){
    var randomURL='http://api.giphy.com/v1/'+el.className+'/random?api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit=5';
    var output='.op2';
    $.ajax({
        url: randomURL, success: function (result) {
            console.log(result);
            $(output).html('<br><br>');
            $(output).append("<div class='container' onMouseOver='f1(this)' onMouseOut='f2(this)'><a href='"+result.data.image_original_url+"' download> <video poster='loader.gif' src='"+result.data.image_mp4_url +"' autoplay loop></a><div class='emojibar'>" +
                "<div style='width: 100%' align='center'><img onclick='addtofavs(this)' src='like.gif' name='like'><img onclick='addtofavs(this)' name='love' src='love.gif'><img onclick='addtofavs(this)' name='haha' src='haha.gif'><img onclick='addtofavs(this)' name='wow' src='wow.gif'><img onclick='addtofavs(this)' name='sad' src='sad.gif'>" +
                "<img onclick='addtofavs(this)' name='angry' src='angry.gif'></div>" +
                "</div>"+
                "</div>");

        }
    });
}

function trending(el){

    var output='.op2';
    var input2='.ip4';
    var limit=$(input2).val().length==0?5:parseInt($(input2).val());
    var URL='http://api.giphy.com/v1/'+el.className+'/trending?api_key=e7165f7f58dc4f07ae6cb17e0db63d77&limit='+limit;
    $.ajax({url: URL, success: function(result) {
        console.log(result);
        var flag;
        var obj=JSON.parse(localStorage.getItem('stickers'));
        $(output).html('<br><br>');

        for (var i = 0; i < result.data.length; i++) {
            var op='';
            flag=0;
            for(var key in obj) {
                var value = obj[key];
                for(var j=0;j<value.length;j++){
                    if(value[j]===result.data[i].images.original.mp4){
                        op="<div class='container' onMouseOver='f1(this)' onMouseOut='f2(this)'><a href='"+result.data[i].images.original.url+"' download> <video poster='loader.gif' src='"+result.data[i].images.original.mp4 +"' autoplay loop></a><div class='emojibar'><div style='width: 100%' align='center'>";
                        op+="<img name='"+key+"' src='"+key+".gif'></div></div></div>";
                        $(output).append(op);
                        flag=1;
                        break;
                    }
                }
            }
            if(flag===0)
                $(output).append("<div class='container' onMouseOver='f1(this)' onMouseOut='f2(this)'><a href='"+result.data[i].images.original.url+"' download> <video poster='loader.gif' src='"+result.data[i].images.original.mp4 +"' autoplay loop></a><div class='emojibar'><div style='width: 100%' align='center'>" +
                    "<img onclick='addtofavs(this)'  src='like.gif' name='like'><img onclick='addtofavs(this)' name='love' src='love.gif'><img onclick='addtofavs(this)' name='haha' src='haha.gif'><img onclick='addtofavs(this)' name='wow' src='wow.gif'><img onclick='addtofavs(this)' name='sad' src='sad.gif'>" +
                    "<img onclick='addtofavs(this)' name='angry' src='angry.gif'></div>" +
                    "</div>" +
                    "</div>");
        }
    }});
}

function f1(el){
    $(el.firstChild.nextSibling).css({"-webkit-transform":"translateY(-135px)"});
    $(el.firstChild.nextSibling).css({"background-color":"rgba(0,0,0,0.55)"});
    $(el.firstChild.firstChild.nextSibling).css({"border-radius":"50%"});
    $(el.firstChild.firstChild.nextSibling).css({"box-shadow":"0 0 100px black"});

}
function f2(el){

    $(el.firstChild.firstChild.nextSibling).css({"border-radius":"0"});
    $(el.firstChild.nextSibling).css({"background-color":"rgba(255,255,255,0.55)"});
    $(el.firstChild.firstChild.nextSibling).css({"box-shadow":"none"});
    $(el.firstChild.nextSibling).css({"-webkit-transform":"none"});

}



function addtofavs(el){
    var obj;
    if(localStorage.getItem("stickers")!==null) {
        obj = JSON.parse(localStorage.getItem("stickers"));
    }
    else
        obj={};

    if(!(el.name in obj)){
        obj[el.name]=[];
    }
    obj[el.name].push(el.parentElement.parentElement.parentElement.firstChild.firstChild.nextSibling.src);
    localStorage.setItem('stickers',JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem("stickers")));
    $(el.parentElement.parentElement).html("<div style='width: 100%' align='center'><img style='cursor:default' onclick='null' src='"+el.name+".gif'></div>");

}


