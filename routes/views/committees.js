var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'committees';
	locals.filters = {
		committees: req.params.committees
	};
	locals.data = {
		committees: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Committees').model.findOne({
			slug: locals.filters.committees
		})
		
		q.exec(function(err, result) {
			locals.data.committees = result;
			console.log(JSON.stringify(result));
			next(err);
		});
		
	});
	
	// Render the view
	view.render('committees');
	
};
