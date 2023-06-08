const express = require('express');
const cors = require("cors");

require('./db/config');

const User = require('./db/Model/users');
const Product = require('./db/Model/products');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup',async (req,res)=>{
    
    let user = await User.findOne({email:req.body.email});
    if(user){
        res.send("user already exists");
    }
    else{
        let users = new User(req.body);
        let result = await users.save();
        result = result.toObject();
        delete result.password;
        res.send(result);
    }
})

app.post('/login',async (req,res)=>{
    
    if(req.body.email && req.body.password){
        let user = await User.findOne({email:req.body.email});
        if(user && user.password===req.body.password){
            let newUser = await User.findOne({email:req.body.email}).select("-password");
            res.send(newUser);
        }
        else if(user && user.password!=req.body.password){
            res.send("invalid password");
        }
        else{
            res.send("email id doesn't exists");
        }
    }
    else{
        if(req.body.email){
            res.send("Please enter the password");
        }else{
            res.send("Please enter a valid email");
        }
    }
})

app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})
app.listen(4000)