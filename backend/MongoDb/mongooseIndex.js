const express = require('express');
require('./config');

const Products = require('./product');

const app = express();

app.use(express.json());


app.post('/create',async (req,res)=>{
    // console.log(req.body);
    // res.send("Done");

    let data = new Products(req.body);
    let result = await data.save();
})

app.listen(3000);