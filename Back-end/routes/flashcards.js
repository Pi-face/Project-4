const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Flashcard = require('../models/Flashcard');

//CRUD for flashcards

// @route    GET api/flashcards
// @desc     Get all flashcards
// @access   Private
router.get('/', auth, async (req, res) => {
	try {
		const flashcards = await Flashcard.find({ user: req.user.id }).sort({
			date: -1
		});
		res.json(flashcards);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    POST api/flashcards
// @desc     Create a flashcard
// @access   Private
router.post(
	'/',
	[
		auth,
		[
			check('question', 'Question is required')
				.not()
				.isEmpty(),
            check('answer', 'Answer is required')
                .not()
                .isEmpty(),
		]
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { imagesURL, question, answer, } = req.body;

		try {
			const newFlashcard = new Flashcard({
				imagesURL,
				question,
				answer,
				user: req.user.id
			});

			const flashcard = await newFlashcard.save();

			res.json(flashcard);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    PUT api/flashcards/:id
// @desc     Update a flashcard
// @access   Private
router.put('/:id', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

        const { imagesURL, question, answer, } = req.body;

	// Build flashcard object
	const flashcardFields = {};
	if (imagesURL) flashcardFields.imagesURL = imagesURL;
	if (question) flashcardFields.question = question;
	if (answer) flashcardFields.answer = answer;


	try {
		let flashcard = await Flashcard.findById(req.params.id);

		if (!flashcard ) return res.status(404).json({ msg: 'Flashcard not found' });

		// Make sure user owns contact
		if (flashcard .user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

        flashcard  = await Flashcard.findByIdAndUpdate(
			req.params.id,
			{ $set: flashcardFields },
			{ new: true }
		);

		res.json(flashcard);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

// @route    DELETE api/flashcards/:id
// @desc     Delete a flashcard
// @access   Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const flashcard = await Flashcard.findById(req.params.id);

		if (!flashcard) return res.status(404).json({ msg: 'Contact not found' });

		// Make sure user owns contact
		if (flashcard.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Flashcard.findByIdAndRemove(req.params.id);

		res.json({ msg: 'flashcard DELETED' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});



module.exports = router;