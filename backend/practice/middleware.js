const express = require('express');

const app = express();

// function middleware(req,res,next){
//     //...

//     next();
// }

// app.use(middleware);

// app.use(express.static('htmls'))

app.get('/',(req,res)=>{
    res.end('Hello User');
})

// app.get('/products',(req,res)=>{
//     res.sendFile('./practice/htmls/product.html',{root:__dirname});
// })

app.use('/post',express.json());
app.use(express.urlencoded({ extended:false}));

app.post('/post',(req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    res.send(req.body);
})

app.post('/users',(req,res)=>{
    res.send(req.body);
})

app.listen('4000');

