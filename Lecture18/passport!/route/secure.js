/**
 * Created by anshul on 19/7/17.
 */
var router=require('express').Router();

var pathname='secure';

function checkuser(req,res,next){
    if(req.user){
        next();
    }
    //or if(req.isAuthenticated()){
    // next();
    // }
    else{
        res.redirect('/');
    }
}

router.use(checkuser);

router.get('/1',function(req,res){
    console.log(req.user);
    res.send(pathname+' 1 path');
})

router.get('/2',function(req,res){
    res.send(pathname+' 2 path');
})


module.exports=router;