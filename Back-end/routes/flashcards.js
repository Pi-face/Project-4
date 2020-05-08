const express = require('express');
const router = express.Router();

//CRUD for flashcards

//@route   GET api/flashcards
//@desc    GET all users flashcards
//@access  Private

router.get('/',(req,res) =>{
    res.send('get all flashcards');
});

//@route   POST api/flashcards
//@desc    Add new Flash cards
//@access  Private

router.post('/',(req,res) =>{
    res.send('add flashcard');
});

//@route   PUT api/flashcards/:id
//@desc    Update flashcard
//@access  Private

router.put('/:id',(req,res) =>{
    res.send('Update flashcards');
});

//@route   DELETE api/flashcards/:id
//@desc    DELETE flashcard
//@access  Private

router.delete('/:id',(req,res) =>{
    res.send('Delete flashcard');
});



module.exports = router;