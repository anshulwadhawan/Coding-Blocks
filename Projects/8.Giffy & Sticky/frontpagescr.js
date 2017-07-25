function redirect(el){
    window.location.href=el.textContent.substring(1)+'/index.html';
}
$(function() {
    $('#giffy').hover(function() {
        $('#sticky').css('background-color', 'black');
        $('#box2').css('background-color', 'black');
        $('#sticky').css('color', 'black');
        $('.separator').css('background-color', 'black');
        $('.separator').css('transition', '1s');
        $('#sticky').css('transition', '1s');
        $('#box2').css('transition', '1s');
    }, function() {
        $('#sticky').css('background-color', '');
        $('#sticky').css('color', '');
        $('.separator').css('background-color', '');
        $('#box2').css('background-color', '');
    });
    $('#sticky').hover(function() {
        $('#giffy').css('background-color','black');
        $('#box1').css('background-color','black');
        $('#giffy').css('color', 'black');
        $('.separator').css('background-color', 'black');
        $('.separator').css('transition', '1s');
        $('#giffy').css('transition', '1s');
        $('#box1').css('transition', '1s');
    }, function() {
        $('.separator').css('background-color', '');
        $('#giffy').css('background-color', '');
        $('#box1').css('background-color', '');
        $('#giffy').css('color', '');
    });
});