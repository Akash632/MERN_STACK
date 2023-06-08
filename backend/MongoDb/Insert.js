const dbConnect = require('./index.js');

const insert = async()=>{
    let db = await dbConnect();
    let data = await db.insertOne({
        name:'oppo 234', brand:"oppo",price:12000,category:"mobile"
    })
    if(data.acknowledged===true){
        console.log("Successfully Entered");
    }
}
insert()