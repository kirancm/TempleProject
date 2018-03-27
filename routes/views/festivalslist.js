var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'festivals';
	locals.data = {
		festivals: []
	};
	

	// Load the festivals
	view.on('init', function(next) {

		var q = keystone.list('Festivals').paginate({
				page: req.query.festivals || 1,
				perPage: 10,
				maxPages: 10
			})
		
		
		q.exec(function(err, results) {
			locals.data.festivals = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('festivalslist');
	
};
