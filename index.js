// const port = 4000
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const urlencodedParser = bodyparser.urlencoded({extend: false})
const mongoose = require('mongoose')
const eventsModel = require('./models/reginaitevents.model')
const usersModel = require('./models/users.model')
// const url = 'mongodb://localhost:27017/comics'

require('dotenv').config()
app.use('',express.static('public'))
// app.use(''.express.static('others'))
app.set('view engine','pug')
app.use(urlencodedParser)

const port = process.env.PORT || 3000
var mongoDB = process.env.MONGO_CONNECT_URI
mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser: true})

app.get('/', (req,res) => {
    eventsModel.find({}).sort({startdate: -1}).exec((err, events) => {
        res.render('index', {events: events})
    })
})

app.get('/login', (req,res) =>{
    res.render('login')
})

app.get('/register', (req,res) => {
    res.render('register')
})

app.get('/newevent', (req,res) => {
    res.render('newevent')
})

app.post('/search', urlencodedParser, (req,res) => {
    res.redirect('/')
})

app.get('/loginCheck/:username', (req,res) => {
    usersModel.find({username: req.params.username}).exec((err, users) => {
        res.json(users)
    })
})

app.get('/checkemail/:email', (req,res) => {
    usersModel.find({email: req.params.email}).exec((err, users) => {
        res.json(users)
    })
})

app.get('/checkusername/:username', (req,res) => {
    usersModel.find({username: req.params.username}).exec((err, users) => {
        res.json(users)
    })
})

app.post('/newuser', urlencodedParser, (req,res) => {
    let newUser = [{
        username: req.body.username,
        email: req.body.email,
        password: req.body.pwresult
    }]

    usersModel.create(newUser, (err,small) => {
        if (err) return handleError(err)
        res.redirect('/')
    })
})

app.post('/addevent',urlencodedParser, (req,res) => {
    let startDate = ("" + req.body.startdate).substr(0,10) + " " + ("" + req.body.startdate).substr(11,5)
    let endDate = ("" + req.body.enddate).substr(0,10) + " " + ("" + req.body.enddate).substr(11,5)
    let newEvent = [{
        name: req.body.eventname,
        organizer: req.body.organizer,
        orgURL: req.body.website, 
        startdate: startDate,
        enddate: endDate,
        location: req.body.location,
        description: req.body.desc,
        img: req.body.image
    }]
    eventsModel.create(newEvent, (err,small) => {
        if (err) return handleError(err)
        res.redirect('/')
    })
})

app.listen(port, () => {
    console.log(`Listening the port ${port}`)
})