/**
 * Created by anshul on 12/7/17.
 */

    function display() {
        $.get({
            url: '/todos/all', success: function (data) {
                console.log(data);
                $('#op').html(' ');
                $('#op').append('<ul>');

                for(var i=0;i<data.length;i++){
                    $('#op').append('<li>'+data[i].id+' -> '+data[i].task+' -> '+data[i].done+'</li>');
                }

                $('#op').append('</ul>');
            }
        });
    }

    function insert() {

        $.post('/todos/insert', {todo: $('#ip2').val()}, function (data) {
            console.log(data);
            display();
        });
    }

    function update() {

        $.post('/todos/update', {id: $('#ip3id').val(), done: $('#ip3done').val()}, function (data) {
            console.log(data);
            display();
        });
    }

    function delet(){

        $.post('/todos/delete', {id: $('#ip4').val()}, function (data) {
            console.log(data);
            display();
        });
    }

