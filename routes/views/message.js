var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'home';
	locals.filters = {
		events: req.params.date
	};
	locals.data = {
		mod: []
	};
	
	// Load message of the day
	view.on('init', function(next) {
		todaydate = new Date();
		var q = keystone.list('Message').model.findOne({
			date: todaydate
		})
		
		q.exec(function(err, result) {
			locals.data.mod = result;
			console.log(JSON.stringify(result));
			next(err);
		});
		
	});
	
	// Render the view
	view.render('events');
	
};
