const express = require('express')
const ejs = require('ejs');
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')
const session = require('express-session')


const mongoose = require('mongoose');

const app = express()


mongoose.connect('mongodb://localhost/smartedu');

//global variable
global.userIN = null;


//middleware


app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
})

//Template ENGINE
app.set('view engine', 'ejs');

//routes
app.use('/', pageRoute);
app.use('/courses', courseRoute); 
/* app.post('/courses',(req, res) => {
    console.log(req.body);
}) */
app.use('/categories', categoryRoute); 
app.use('/users', userRoute); 

const port = 3000
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`  )})