const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('connect to DB')).catch((e)=> console.log(e));

app.get('/', (req, res)=> res.send('Hello World!'))
app.listen(process.env.PORT || port, ()=> console.log(process.env.PORT))