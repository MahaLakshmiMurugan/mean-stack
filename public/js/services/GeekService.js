angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

	
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
}]);