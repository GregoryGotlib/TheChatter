const express = require('express');
const mongoose = require('mongoose');
//const users = require('./routes/api/users');
const bodyParser = require('body-parser');
//const passport = require('passport');
const app = express();
const path = require('path');
const DB = require('./config/keys').mongoURI;

mongoose.connect(DB,({useNewUrlParser: true})).then(()=> console.log('Connected to mongoDB')).catch(error => console.log(error));

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=> console.log("Server is running on port:" + PORT));