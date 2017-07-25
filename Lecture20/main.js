var casper=require('casper').create();

console.log('started');

casper.start('https://codingblocks.com/',function(){
    // this.capture('./output/test.png');

    // var title=this.evaluate(function(){
    //     return document.title;
    // });
    // console.log(title);

    //or

    // console.log(this.getTitle());

    // console.log(this.getCurrentUrl());

    // var message='Welcome to';
    // var title=this.evaluate(function(message){
    //     return message+ " "+ document.title;
    // },message)
    // console.log(title);

    var message='Welcome to';
    var title=this.evaluate(function(message){
        return message+ " "+ document.title;
    },message)
});

casper.on('remote.message',function(msg){
    this.echo(msg);
    console.log(msg)
})

// casper.start('https://www.google.co.in/',function(){
//     this.fill('form',{q:'Coding Blocks'},true);
// }).then(function(){
//     this.capture('./output/test3.html');
// });

casper.run();


// casper.exit();