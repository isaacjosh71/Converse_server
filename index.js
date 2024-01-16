const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jobRouter = require('./routes/job')
const bodyParser = require('body-parser')

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('connect to DB')).catch((e)=> console.log(e));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/jobs', jobRouter)

app.get('/', (req, res)=> res.send('Hello World!'))
app.listen(process.env.PORT || port, ()=> console.log(process.env.PORT))