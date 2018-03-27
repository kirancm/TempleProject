var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'committeeslist';
	locals.data = {
		committees: []
	};
	

	// Load the events
	view.on('init', function(next) {

		var q = keystone.list('Committees').model.find();
		
		
		q.exec(function(err, results) {
			locals.data.committees = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('committeeslist');
	
};
