const {MongoClient} = require('mongodb');  //importing mongoClient
const url = 'mongodb://127.0.0.1:27017'; 
const client = new MongoClient(url);     //passing url to mongoClient 

async function dbConnect(){
    let result = await client.connect();   //connecting the client
    let db=result.db('e-com');    //connecting with e-com database
    return db.collection('products'); //connecting with products colllection
}
module.exports=dbConnect;
