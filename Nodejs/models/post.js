const mongoose = require('mongoose');

const post = mongoose.Schema.Types({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
});