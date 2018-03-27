var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'poojas';
	locals.filters = {
		poojas: req.params.poojas
	};
	locals.data = {
		poojas: []
	};
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Poojas').model.findOne({
			slug: locals.filters.poojas
		})
		
		q.exec(function(err, result) {
			locals.data.poojas = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('poojas');
	
};
