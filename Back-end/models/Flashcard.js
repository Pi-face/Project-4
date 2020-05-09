var mongoose  = require('mongoose');
var Schema  = mongoose.Schema;

var FlashcardSchema = new Schema({
    imageURL: String,
    question: String,
    answer: String,
    time: Date.now,
});

module.exports = mongoose.model('flashcards', FlashcardSchema);