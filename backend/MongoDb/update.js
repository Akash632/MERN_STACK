const dbConnect = require('./index.js');

async function update(){
    let db = await dbConnect();
    let result = await db.updateOne(
        {brand:"Nokia"},{$set:{name:"Nokia 220"}}
    )
        
    if(result.acknowledged===true){
        console.log("Data Updated");
    }
}
update();