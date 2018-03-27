var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'events';
	locals.filters = {
		events: req.params.events
	};
	locals.data = {
		posts: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Events').model.findOne({
			slug: locals.filters.events
		})
		
		q.exec(function(err, result) {
			locals.data.events = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('events');
	
};
