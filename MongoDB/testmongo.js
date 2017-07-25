/**
 * Created by anshul on 16/7/17.
 */

var mongodb=require('mongodb');

var url='mongodb://localhost:27017/mytodos';

mongodb.MongoClient.connect(url,function(err,db){
    console.log('Connected to Mongo Client');
    // insertItem(db,function(data){
    //     console.log(data);
    // })
    // findItem(db,function(data){
    //     console.log(data);
    // })
    // updateItem({'task':'task2'},db,function (data) {
    //     console.log(data);
    // });
    deleteItem({'task':'task2'},db,function (data) {
        console.log(data);
    })
});

function insertItem(db,cb){

    var collection=db.collection('ToDoList');
    collection.insertOne({task:'task2','done':true},function(err,result){
        if(err)throw err;

        cb(result);


    })
}

function deleteItem(task,db,cb){
    var collection=db.collection('ToDoList');
    collection.deleteOne(task,function(err,result){
        if(err)throw err;
        findItem(db,cb);
    })
}

function findItem(db,cb){
    var collection=db.collection('ToDoList');
    collection.find({}).toArray(function(err,data){
        cb(data);
    })
}

function updateItem(task,db,cb){
    var collection=db.collection('ToDoList');
    collection.updateOne(task,{$set:{task:'no task'}},function (err,result) {
        if(err)throw err;
        findItem(db,cb);
    });

}