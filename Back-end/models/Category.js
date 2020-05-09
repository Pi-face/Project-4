const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    title:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('category', CategorySchema);