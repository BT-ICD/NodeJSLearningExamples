/***
 * Learning about Mongoose
 * Example - 1
 * Reference URL: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#mongoose_primer
 */
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/studentdb';

//get the default connection
var db = mongoose.connection;

mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true}); 
db.on('connected', onDBConnected);

// async function main(){
//     await mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology:true}); 
//     console.log('From Main');
// }

//main().catch(err=> console.log(error));



//bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console,'MongoDB connection error'));

//Define Schema
var Schema = mongoose.Schema;
var StudentModelSchema = new Schema({
    id:Number,
    firstName:String
});

//Compile model from Schema. First Argument name of collection. If collection is not available it will create new collection.
var StudentModels = mongoose.model('students', StudentModelSchema);


/**
 * To add new studnet
 */
// var student1 = new StudentModels({id:45,firstName:'Akash'});
// student1.save(function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('new record updated');
//     }
// });

/**
 * Searching for records
 * You can search for records using query methods, specifying the query conditions as a JSON document. 
 */
//  var query = StudentModels.find({'id':1});
// query.select('id firstName');
// query.exec(function (err, data){
//     if (err){
//         console.log('error');
//         console.log(err);
//     }
//     console.log(data);
// });

/**
 * find with where function
 */

 StudentModels.
    find().
    where('id').gt(3).
    select('id firstName').
    exec(studentListHavingIdGreatherThen3);

function studentListHavingIdGreatherThen3(err, data){
    if(err){
        console.log('error');
        console.log(err);
    }
    else{
        console.log(data);
    }
}
/**
 * Connected event of database - 
 * Reference: https://mongoosejs.com/docs/connections.html
 */
function onDBConnected(){
    console.log('onDBConnected - DB Connected');
   
}