let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Star = new Schema({ star: Number });

var Tag = new Schema({ tag: String })

var Comments = new Schema({
    text: {
        type: String
    },
    author: {
        type: String
    },
    stars: [Star]
}, {
        timestamps: true
    });

var Post = new Schema({

    title: {
        type: String
    },

    subtitle: {
        type: String
    },

    author: {
        type: String
    },

    text: {
        type: String
    },

    tags: [Tag],

    stars: [Star],

    comments: [Comments],

    other: {
        type: String
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Post', Post);