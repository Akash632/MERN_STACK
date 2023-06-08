const express = require('express');
const dbConnect = require('./index.js');
const mongodb = require('mongodb');  
const app = express();

app.get('/', async (req,res)=>{
    let db = await dbConnect();
    let data = await db.find({}).toArray();
    let final_result = data.toString();
    console.log(data);
    res.send(data)
});

app.use(express.json());

app.post('/',async (req,res)=>{
    console.log(req.body);
    res.send(req.body);
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    console.log(result);
})

app.put('/:name',async (req,res)=>{
    console.log(req.body);
    let db = await dbConnect();
    let result = await db.updateOne({name:req.params.name},{$set:req.body})
    res.send({result:"Updated"})
})
//Here we can update the data in 2 ways
//1. One is by giving req.body.name in the mongo query
//2. Second is by giving query params


app.delete('/:id',async (req,res)=>{
    console.log(req.params.id);
    let db = await dbConnect();
    let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send("Done")
})
//here for accessing id name we have to get the object instance of that Id
 
app.listen(3000,()=>{
    console.log("Started listening on port")
})

