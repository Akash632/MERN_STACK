const express = require('express');

const app = express();

const studentRoute = require('./practice/routes/login.js');


app.use('/',studentRoute);

app.listen(3001);
