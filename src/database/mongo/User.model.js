let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Editor = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    
    // admin | editor | creator | disabled
    role: {
        type: String,
        default: 'disabled'
    },    

    other: {
        type: String
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Editor', Editor);