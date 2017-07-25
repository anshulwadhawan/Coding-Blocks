/**
 * Created by anshul on 16/7/17.
 */

var mongodb=require('mongodb');

var url='mongodb://localhost:27017/shopping';

var obj='';

function connectDB(run_server) {
    mongodb.MongoClient.connect(url, function (err, db) {
        if (err)throw err;
        console.log('Connection is established');
        obj=db;
        run_server();
    })
}

function insertToDo(task,cb){

    obj.collection('ToDoList').insertOne(task,function(err,result){
        if(err)throw err;
        cb(result);
    })

}

function findToDo(cb){
    obj.collection('ToDoList').find({}).toArray(function(err,data){
        if(err)throw err;
        cb(data);
    })
}

module.exports={
    connectDB,
    insertToDo,
    findToDo
};
