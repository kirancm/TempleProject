var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'festivals';
	locals.filters = {
		festivals: req.params.festivals
	};
	locals.data = {
		festivals: []
	};
	
	// Load the current festival
	view.on('init', function(next) {
		
		var q = keystone.list('Festivals').model.findOne({
			slug: locals.filters.festivals
		})
		
		q.exec(function(err, result) {
			locals.data.festivals = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('festivals');
	
};
