// const port = 4000
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const urlencodedParser = bodyparser.urlencoded({extend: false})
const mongoose = require('mongoose')
const eventsModel = require('./models/reginaitevents.model')
// const url = 'mongodb://localhost:27017/comics'

require('dotenv').config()
app.use('',express.static('public'))
app.set('view engine','pug')
app.use(urlencodedParser)

const port = process.env.PORT || 3000
var mongoDB = process.env.MONGO_CONNECT_URI
mongoose.connect(mongoDB,{useUnifiedTopology: true, useNewUrlParser: true})

app.get('/', (req,res) => {
    eventsModel.find({}).sort({date: -1}).exec((err, events) => {
        res.render('index', {events: events})
    })
})

app.get('/eventlist', (req,res) => {
    eventsModel.find({}).sort({date: -1}).exec((err, events) => {
        res.render('events', {events: events})
    })
})

app.get('/newevent', (req,res) => {
    res.render('newevent')
})

app.post('/search', urlencodedParser, (req,res) => {
    console.log(req.body.keyword)
    res.redirect('/')
})

app.post('/addevent',urlencodedParser, (req,res) => {
    let eventDate = ("" + req.body.date).substr(0,10) + " " + ("" + req.body.date).substr(11,5)
    let newEvent = [{
        name: req.body.eventname,
        organizer: req.body.organizer,
        orgURL: req.body.website, 
        date: eventDate,
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