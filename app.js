const express = require('express')
const ejs = require('ejs');
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')

const mongoose = require('mongoose');

const app = express()


mongoose.connect('mongodb://localhost/smartedu');



//middleware
app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Template ENGINE
app.set('view engine', 'ejs');

//routes
app.use('/', pageRoute);
app.use('/courses', courseRoute); 
/* app.post('/courses',(req, res) => {
    console.log(req.body);
}) */


const port = 3000
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`  )})