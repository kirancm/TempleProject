var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'eventlist';
	locals.filters = {
		date: req.params.date
	};
	locals.data = {
		events: []
	};
	

	// Load the events
	view.on('init', function(next) {

		var q = keystone.list('Events').paginate({
				page: req.query.events || 1,
				perPage: 10,
				maxPages: 10
			})
			.where('state', 'published')
			.sort('-when')
		
		if (req.params.date) {
			q.where('when').in(todaydate);
		}
		
		q.exec(function(err, results) {
			locals.data.events = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('eventlist');
	
};
