var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		posts: [],
		events: [],
		categories: []
	};

	view.on('init', function(next) {
		
		var q = keystone.list('Post').model.find().where('state', 'published').limit(3);
		
		q.exec(function(err, results) {
			locals.data.posts = results;
				var q1 = keystone.list('Events').model.find().limit(3);

				q1.exec(function(err, results) {
					locals.data.events = results;
		            next(err);
				});
			//next(err);
		});

	});
	
	//load message of the day
	view.on('init', function(next) {
		todaydate = new Date();
		var q = keystone.list('Mod').model.find({"date" : {"$lt": new Date() }}).sort('-date');
		
		q.exec(function(err, result) {
			locals.data.mod = result[0];// take first message
			console.log(JSON.stringify(result));
			next(err);
		});
	});

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
	view.render('index');
	
};
