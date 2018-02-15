const express = require('express');
const router = express.Router();

//retriving contact data
router.get('/contact', (req, res, next) => {
	res.send('Retriving Contact List');
});

//add contact
router.post('/contact', (req, res, next) => {
	//logic to save contact info
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
	//logic to delete contact
});

module.exports = router;
