const express = require('express')
const ejs = require('ejs');



const app = express()

//middleware
app.use(express.static('public'))


//Template ENGINE
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {    
    res.render('index',)
})

app.get('/about', (req, res) => {    
    res.render('about',)
})

app.get('/contact', (req, res) => {    
    res.render('contact',)
})

app.get('/course-single', (req, res) => {    
    res.render('course-single',)
})

app.get('/courses', (req, res) => {    
    res.render('courses',)
})
app.get('/dashboard', (req, res) => {    
    res.render('dashboard',)
})
app.get('/login', (req, res) => {    
    res.render('login',)
})
app.get('/register', (req, res) => {    
    res.render('register',)
})




const port = 3000
app.listen(port, () => {
console.log(`Example app listening on port ${port}!`  )})