const express = require('express');

const router = express.Router()

// const {login,register} = require('../controllers/loginController.js');

// router.get('/login',login);

// router.get('/register',register);

router.get('/',(req,res,next)=>{
    res.send('<h1>Home</h1>');
})

router.get('/login',(req,res,next)=>{
    res.send('<h1>Login</h1>');
})

router.get('/dashboard',(req,res)=>{
    res.send('<h1>Dashboard</h1>');
})

module.exports = router;