const express = require('express');
const router = express.Router();

//CRUD for categories

//@route   GET api/categories
//@desc    GET all users categories
//@access  Private

router.get('/',(req,res) =>{
    res.send('get all categories');
});

//@route   POST api/categories
//@desc    Add new categories
//@access  Private

router.post('/',(req,res) =>{
    res.send('add categories');
});

//@route   PUT api/categories/:id
//@desc    Update categories
//@access  Private

router.put('/:id',(req,res) =>{
    res.send('Update categories');
});

//@route   DELETE api/categories/:id
//@desc    DELETE categories
//@access  Private

router.delete('/:id',(req,res) =>{
    res.send('Delete categories');
});

module.exports = router;

