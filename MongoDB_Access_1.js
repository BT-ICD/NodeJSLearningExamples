/**
 * Learning references: 
 * https://www.npmjs.com/package/mongodb
 * https://www.mongodb.com/developer/quickstart/node-crud-tutorial/
 * 
 */
const {MongoClient} = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
//Mongo Client
const client = new MongoClient(url);
// Database Name
const dbName = 'studentdb';

async function main() {
  // Use connect method to connect to the server
  try{
    await client.connect();
    await listDatabases(client);
    //Create new record - Insert one document
    // await createNewStudent(client, {
    //     'id':5,
    //     'firstName':'Lauren Schaefer'
    // });

    //Create multiple records - insert one or more students
    // await createMultipleStudents(client, [
    //     {'id':6, 'firstName':'Test - Multiple 1 '},
    //     {'id':7,'firstName':'Test - Multiple 2 '},
    // ]);

    //To find a particular student by student id
    // await findOneStudentById(client, 2);

    // await findStudentWithIdGreatherThan(client,2);

    //To update particular document
    // await updateStudnetById(client, 7, {firstName:'Update Name'} );

    //To delete particular document
    await deleteByStudentId(client, 7);

  }
  catch(e){
      console.error(e);
  }
  finally{
      await client.close();
  }
  
}

/**
 * To list database in our cluster
 */
async function listDatabases(client){
    const datbasesList = await client.db().admin().listDatabases();
    datbasesList.databases.forEach(db=>{
        console.log(`- ${db.name}`);
    })
}

/**
 * To create new student
 */
async function createNewStudent(client, newStudent){
const result = await client.db(dbName).collection('students').insertOne(newStudent);
console.log(`New Student created with the following id ${result.insertedId}`)
}
/**
 * Example to insert many - 
 */
async function createMultipleStudents(client, newStudents){
const result = await client.db(dbName).collection('students').insertMany(newStudents);
console.log(`${result.insertedCount} new students created with following id(s):`);
console.log(result.insertedIds);
}

/**
 * Read - Find one student by name
 */
async function findOneStudentById(client, id){
const result = await client.db(dbName).collection('students').findOne({id:id});
    if(result){
        console.log(`Found a listing in the collection with the id of ${id}`);
        console.log(result);
        console.log(result.id);
        console.log(result.firstName);
    }
    else{
        console.log(`No student found with the id: ${id}`);
    }
}
/**
 * Read - To find list of students between ids
 * Find multiple records
 */
async function findStudentWithIdGreatherThan(client, idFrom){
    const cursor = await client.db(dbName).collection('students').find({
        id:{$gte:idFrom}
    }).sort({id:-1});
const results = await cursor.toArray();
console.log(results.length);
if(results.length>0){
    results.forEach((result,i)=>{
        console.log('i-->',i);
        console.log('id: ',result.id);
        console.log('firstName',result.firstName);
        
    });
}
}
/**
 * Update single document
 * Method: updateOne contains arguments
 * Argument 1 - Filter document
 * Argument 2 - Document to update
 */

async function updateStudnetById(client, id, updatedStudent){
  const result = await  client.db(dbName).collection('students').updateOne({id:id},{$set:updatedStudent} );
  console.log(`${result.matchedCount} document(s) matched the query criteria`);
  console.log(`${result.modifiedCount} documents was/were updated`);

}

/**
 * To delete a particular document
 * Method: deleteOne
 * Argument 1: Filter document - This filter object document is to select the document to delete
 */

async function deleteByStudentId(client, id){
    const result =await client.db(dbName).collection('students').deleteOne({id:id});
    console.log(`${result.deletedCount} document deleted`);
}
main().catch(console.error);
