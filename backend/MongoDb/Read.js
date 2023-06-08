const dbConnect = require('./index.js');

async function getData(){
    let result = await dbConnect();
    let data = await result.find({}).toArray();
    console.log(data);
}
getData();
