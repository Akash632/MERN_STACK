const dbConnect = require('./index.js');

async function deleteData(){
    let db = await dbConnect();
    let data = await db.deleteMany({brand:'Real me'});
    if(data.acknowledged){

        console.log("Data deleted successfully")
    }
}
deleteData();