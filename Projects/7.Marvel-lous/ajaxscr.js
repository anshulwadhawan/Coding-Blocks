$(function(){

    var PRIV_KEY = "85b4c9fb7ae7323f98cd67e5bf755b4a66a3fd82";
    var API_KEY = "2337f766835765e641c789befa6bf65f";
    var hash = md5("1" + PRIV_KEY + API_KEY);

    var textbox=$('#ip');
    var btn=$('.go');
    var output=$('#preop');
    var outputtitle=$('#exampleModalLongTitle');

    btn.click(function(){

        var name=textbox.val();

        output.html(" ");
        $("#stories").html(" ");
        $("#comics").html(" ");
        $("#series").html(" ");
        outputtitle.html(" ");

        if(name.length==0){
            output.append("INVALID ENTRY");
            $('.nav.nav-tabs').hide();
            return;
        }

        var URL='https://gateway.marvel.com:443/v1/public/characters?name='+geturlname(name)+'&apikey=2337f766835765e641c789befa6bf65f&ts=1&hash='+hash;

        $.ajax({url: URL, success: function(result){
            console.log(result);

            if(result.data.results.length==0){
                output.append("INVALID ENTRY");
                $('.nav.nav-tabs').hide();
                return;
            }


            var name=result.data.results[0].name;
            var imageurl=result.data.results[0].thumbnail.path+'.'+result.data.results[0].thumbnail.extension;
            var desc=result.data.results[0].description;


            outputtitle.html(name);
            output.append("<img src='"+imageurl+"'><br>");
            output.append(desc+"<br><br>");
            $("#comics").html("<strong>TOTAL COMICS : "+result.data.results[0].comics.available+"</strong><br><br>"+getnames(result.data.results[0].comics.items));
            $("#series").html("<strong>TOTAL SERIES : "+result.data.results[0].series.available+"</strong><br><br>"+getnames(result.data.results[0].series.items));
            $("#stories").html("<strong>TOTAL STORIES : "+result.data.results[0].stories.available+"</strong><br><br>"+getnames(result.data.results[0].stories.items));


        }});



    })

    function geturlname(str){
        var str2='';
        for(var i=0;i<str.length;i++)
        {
            if(str.charAt(i)==' '){
                str2+='%20';
            }
            else
                str2+=str.charAt(i);
        }
        return str2;
    }

    function getnames(arr){
            var str="";
            for(var i=0;i<arr.length;i++){
                    str+=arr[i].name+"<br>";
            }
            return str;
    }




});
function search(el){

    $('#ip').val(el.textContent);
    $('.go').click();
}
