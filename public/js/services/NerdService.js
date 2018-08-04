angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    app.get('/nerds', function(req, res) {
		console.log('Getting user list...');
		var Nerd = require('./models/Nerd');
		var test = Nerd.find().exec(function (err, docs) {
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

}]);