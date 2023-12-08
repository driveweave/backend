
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        lowercase: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true
    },
    nationality: {
        type: String, 
        default: ''
    },
    email_verified: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

if (!userSchema.options.toObject) userSchema.options.toObject = {};
userSchema.options.toObject.transform = function(doc, ret, options) {
    delete doc.password
    return ret
}


module.exports = mongoose.model('User', userSchema)