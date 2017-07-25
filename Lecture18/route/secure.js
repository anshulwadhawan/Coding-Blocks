/**
 * Created by anshul on 19/7/17.
 */
var router=require('express').Router();

var pathname='secure';
router.get('/1',function(req,res){
    res.send(pathname+' 1 path');
})

router.get('/2',function(req,res){
    res.send(pathname+' 2 path');
})

module.exports=router;