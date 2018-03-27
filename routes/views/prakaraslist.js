var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Init locals
	locals.section = 'prakaras';
	locals.data = {
		prakaras: []
	};
	

	// Load the prakaras
	view.on('init', function(next) {

		var q = keystone.list('Prakaras').paginate({
				page: req.query.prakaras || 1,
				perPage: 10,
				maxPages: 10
			})
		
		
		q.exec(function(err, results) {
			locals.data.prakaras = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('prakaraslist');
	
};
