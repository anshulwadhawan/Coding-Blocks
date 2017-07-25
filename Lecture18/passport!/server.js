/**
 * Created by anshul on 19/7/17.
 */

var express=require('express');
var passport=require('passport');
var passportLocal=require('passport-local');
var cp=require('cookie-parser');
var bp=require('body-parser');
var session=require('express-session');

var app=express();
var localStrategy=passportLocal.Strategy;

app.use(cp());
app.use(express.static('subfiles'));
app.use(bp.json());
app.use(bp.urlencoded({ extended:true }));
app.use(session({secret:'keyboard cat'}));

app.use(passport.initialize());
app.use(passport.session());


var route={
    secure:require('./route/secure.js'),
    notsecure:require('./route/notsecure.js')
}

app.use('/secure',route.secure);
app.use('/notsecure',route.notsecure);


var userconfig=require('./userconfig');
console.log(userconfig);

passport.use(new localStrategy(
    function(username, password, done) {

        if(userconfig.username!==username){
            return done(null,false,{message:"Please enter correct username"})
        }
        if(userconfig.password!==password){
            return done(null,false,{message:"Please enter correct password"})
        }
        return done(null,userconfig.username);

    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

app.post('/login',passport.authenticate('local',{successRedirect:'/success',failureRedirect: '/'}));

app.get('/success',function(req,res){
    res.send("Successfully Logged In");
})

app.listen('4000',function(){
    console.log('Server is running on port 4000');
})

