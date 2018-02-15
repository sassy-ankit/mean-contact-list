const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', () => {
	console.log('## Connected to DB ');
});
mongoose.connection.on('error', err => {
	if (err) {
		console.log('Error in connecting to DB: ' + err);
	}
});

const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const route = require('./routes/route');
app.use('/api', route);

app.get('/', (req, res) => res.send('<h1>MEAN Contact List</h1>'));

const port = process.env.PORT || 3000;
app.listen(port, err => {
	if (err) console.log('Error with server: ' + err);
	console.log('## Server listening on port ' + port);
});
