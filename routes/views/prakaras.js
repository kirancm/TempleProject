var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'prakaras';
	locals.filters = {
		prakaras: req.params.prakaras
	};
	locals.data = {
		prakaras: []
	};
	
	// Load the current festival
	view.on('init', function(next) {
		
		var q = keystone.list('Prakaras').model.findOne({
			slug: locals.filters.prakaras
		})
		
		q.exec(function(err, result) {
			locals.data.prakaras = result;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('prakaras');
	
};
