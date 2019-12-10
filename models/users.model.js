const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required'] 
    }
})

module.exports = mongoose.model('users', usersSchema)