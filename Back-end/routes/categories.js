const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Category = require('../models/Category');

//CRUD for categories

//@route   GET api/categories
//@desc    GET all users categories
//@access  Private

router.get('/',auth, async (req,res) =>{
try {
    const categories = await Category.find({ user: req.user.id }).sort({ date: -1});
    res.json(categories)

} catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
}
});

//@route   POST api/categories
//@desc    Add new categories
//@access  Private

router.post('/',
[
    auth,
    [
    check('title', 'Category title is required')
    .not()
    .isEmpty()
    ]
],async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const { title, date} = req.body;

    try {
        const newCategory = new Category({
            title,
            date,
            user: req.user.id
        });

        const category = await newCategory.save();

        res.json(category)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
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

