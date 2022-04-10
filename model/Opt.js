var mongoose = require('mongoose')
var otpSchema = mongoose.Schema({
    otp: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now}
})
const Opt= mongoose.model('otp',otpSchema)
module.exports =Opt 