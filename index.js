const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extend: false})
// const MongoClient = require('mongodb')
// const ObjectID = MongoClient.ObjectID
// const url = 'mongodb://localhost:27017'
const app = express()
const port = 3000
// const userModel = require('../models/user.model')

// app.set('view engine','pug')
app.use(express.static('public'))
app.use(urlencodedParser)

const itevents = [{
  name: "Node.js Course",
  organizer: "ComIT",
  orgURL: "www.comit.org", 
  date: "September 2019",
  location: "Innovation Place, Regina SK",
  description: "NodeJS Course on September at Regina",
  img: "img/NodeJS Course.jpg"
},
{
  name: "Code Together",
  organizer: "Cultivator (Powered by Conexus)",
  orgURL: "https://www.hackregina.com/#/events", 
  date: "17 December 2019 6pm – 10pm",
  location: "2 Research Dr Suite 140, Regina",
  description: "A Code Together night is an event to get a group together and work on anything that interests the participants. This event provides a shared space for participants to either: discuss and receive feedback on their projects or just code with peer motivation.",
  img: ""
}];

// app.get('/', (req,res) => {
  
// })

app.get('/events', (req,res) => {
  res.json(itevents);
})
  
app.get('/event', (req,res) => {
  res.render('event')
})

app.post('/addevent', urlencodedParser, (req,res) => {
  // console.log('123456')
  let eventDate = ("" + req.body.date).substr(0,10) + " " + ("" + req.body.date).substr(11,5)
  let addedEvent = {
    name: req.body.eventname,
    organizer: req.body.organizer,
    orgURL: req.body.website, 
    date: eventDate,
    location: req.body.location,
    description: req.body.desc,
    img: "img/" + req.body.image
  }
  itevents.push(addedEvent)
  res.redirect('/')
    })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})