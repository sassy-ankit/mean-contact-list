const mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	}
});

const contact = (module.exports = mongoose.model('Contact', contactSchema));
