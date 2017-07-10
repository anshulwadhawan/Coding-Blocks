/**
 * Created by anshul on 7/7/17.
 */
var filesystem=require("fs");

filesystem.writeFile('text.txt',"Hello World 2",function(err){
        if(err)throw err;
        console.log("written successfully");
})

filesystem.readFile('text.txt',function(err,data){
        if(err)throw err;
        // console.log(data);//buffer
        console.log(data.toString())
})