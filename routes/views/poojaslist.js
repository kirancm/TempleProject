var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'poojaslist';
	locals.data = {
		poojas: []
	};
	

	// Load the events
	view.on('init', function(next) {

		console.log("req.query.poojas:" + req.query.poojas)

		var q = keystone.list('Poojas').paginate({
				page: req.query.poojas || 1,
				perPage: 10,
				maxPages: 10
			})
		
		
		q.exec(function(err, results) {
			locals.data.poojas = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('poojaslist');
	
};
