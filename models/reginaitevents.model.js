const mongoose = require('mongoose')

const eventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'event name is required']
    },
    organizer: String,
    orgURL: String,
    startdate: {
        type: String,
        required: [true, 'startdate is required']
    },
    enddate: {
        type: String,
        required: [true, 'enddate is required']
    },
    location: String,
    description: {
        type: String,
        required: [true, 'event description is required']
    },
    img: String
})

module.exports = mongoose.model('reginaitevents', eventsSchema)