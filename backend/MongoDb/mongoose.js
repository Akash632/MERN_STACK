const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDb = async () =>{


    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    const ProductsModel=mongoose.model('products',productSchema)

    let data = new ProductsModel({name:"m10",price:1000,brand:"max",category:"mobile"});
    let result = await data.save();

    console.log(result);

//Schema is actually a blue print and vildator
//model is used to connect the schema with node
}

const updateInDb = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

    const ProductsModel=mongoose.model('products',productSchema);

    let data = await ProductsModel.updateOne({name:"vivo x50 pro max"},{$set:{name:"vivo t20"}});

}

const deleteInDb = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

    const Product=mongoose.model('products',productSchema);

    let data = await Product.deleteOne({name:"oppo 234"});
}

const findInDb = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com");

    const Product=mongoose.model('products',productSchema);

    let data = await Product.find();

    console.log(data);
}
findInDb();