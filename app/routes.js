module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

	app.get('/nerds', function(req, res) {
		console.log('Getting user list...');
		var Nerd = require('./models/Nerd');
		var Nerd = Nerd.find().exec(function (err, docs) {
			res.json(docs);
		});
	}); 
	
	app.post('/nerds', function(req, res) {
		console.log('Inserting user list...');
		var Nerd = require('./models/Nerd');
		new Nerd(req.body).save(function (err, docs) {
			res.json(docs);
		});
	});

	app.delete('/nerds/:id', function(req, res) {
		console.log('Deleting user...');
		var id = req.params.id;
		var Nerd = require('./models/Nerd');
		Nerd.deleteOne({ _id: id }, function (err, docs) {
			res.json(docs);
		});
	});

	app.get('/nerds/:id', function(req, res) {
		console.log('Getting single user...');
		var id = req.params.id;
		var Nerd = require('./models/Nerd');
		Nerd.findOne({ _id: id }, function (err, docs) {
			res.json(docs);
		});
	});
 	app.put('/nerds/:id', function(req, res) {
		console.log('Updating single user...');
		var id = req.params.id;
		var Nerd = require('./models/Nerd');
		Nerd.findOneAndUpdate({ _id: id }, { $set: req.body}, function (err, docs) {
			res.json(docs);
		});
	});

	
	app.get('/contacts', function(req, res) {
		console.log('Getting contact list...');
		var ContactList = require('./models/ContactList');
		var test = ContactList.find().exec(function (err, docs) {
			res.json(docs);
		});
	});
	
 	app.post('/contacts', function(req, res) {
		console.log('Inserting contact list...');
		var ContactList = require('./models/ContactList');
		new ContactList(req.body).save(function (err, docs) {
			res.json(docs);
		});
	});
 	app.delete('/contacts/:id', function(req, res) {
		console.log('Deleting contact...');
		var id = req.params.id;
		var ContactList = require('./models/ContactList');
		ContactList.deleteOne({ _id: id }, function (err, docs) {
			res.json(docs);
		});
	});
 	app.get('/contacts/:id', function(req, res) {
		console.log('Getting single contact...');
		var id = req.params.id;
		var ContactList = require('./models/ContactList');
		ContactList.findOne({ _id: id }, function (err, docs) {
			res.json(docs);
		});
	});
 	app.put('/contacts/:id', function(req, res) {
		console.log('Updating single contact...');
		var id = req.params.id;
		var ContactList = require('./models/ContactList');
		ContactList.findOneAndUpdate({ _id: id }, { $set: req.body}, function (err, docs) {
			res.json(docs);
		});
	});
};