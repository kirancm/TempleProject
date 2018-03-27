var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'nityapanchangas';
	locals.data = {
		nityapanchangas: {}
	};
	
	//load nityapanchanga
	view.on('init', function(next) {
		todaydate = new Date();
		var q = keystone.list('Nityapanchangas').model.find({"date" : {"$lt": new Date() }}).sort('-date');
		
		q.exec(function(err, result) {
			locals.data.nityapanchangas = result[0];// take first message
			console.log(JSON.stringify(result));
			next(err);
		});
	});
	
	// Render the view
	view.render('nityapanchangas');
	
};
