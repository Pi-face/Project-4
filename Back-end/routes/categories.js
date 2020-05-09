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

router.put('/:id', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	const { title } = req.body;

	// Build contact object
	const categoryFields = {};
	if (title) categoryFields.title = title;

	try {
		let category = await Category.findById(req.params.id);

		if (!category) return res.status(404).json({ msg: 'Contact not found' });

		// Make sure user owns contact
		if (category.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		contact = await Category.findByIdAndUpdate(
			req.params.id,
			{ $set: categoryFields },
			{ new: true }
		);

		res.json(contact);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

//@route   DELETE api/categories/:id
//@desc    DELETE categories
//@access  Private

router.delete('/:id', auth, async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);

		if (!category) return res.status(404).json({ msg: 'Category not found' });

		// Make sure user owns Category
		if (category.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Category.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Category Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;

