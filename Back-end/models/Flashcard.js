var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var FlashcardSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    imagesURL:{
        type: String,
        required:true
    },
    question:{
        type: String,
        required:true
    },
    answer:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },   
});

module.exports = mongoose.model('flashcards', FlashcardSchema);