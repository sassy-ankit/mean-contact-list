const express = require('express');
const router = express.Router();

const Contact = require('../models/contact.model');

//retriving contact data
router.get('/contact', (req, res) => {
	Contact.find((err, contacts) => {
		res.json(contacts);
	});
});

//add contact
router.post('/contact', (req, res) => {
	let newContact = new Contact({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		phone: req.body.phone
	});
	newContact.save((err, contact) => {
		if (err) {
			res.json({ msg: 'Failed to add contact' });
		} else {
			res.json({ msg: 'Contact Added Successfully' });
		}
	});
});

//delete contact
router.delete('/contact/:id', (req, res) => {
	let id = req.params.id;
	Contact.remove({ _id: id }, (err, result) => {
		if (err) {
			res.json({
				msg: 'Errpr in deleting Contact. Try Again after some time!'
			});
		} else {
			res.json({ msg: 'Contact Deleted Successfully' });
		}
	});
});

module.exports = router;
