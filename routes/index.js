var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/eventlist', routes.views.eventlist);
	app.get('/events/:events',routes.views.events);
	app.get('/poojaslist', routes.views.poojaslist);
	app.get('/poojas/:poojas',routes.views.poojas);
	app.get('/festivalslist', routes.views.festivalslist);
	app.get('/festivals/:festivals',routes.views.festivals);
	app.get('/prakaraslist',routes.views.prakaraslist);
	app.get('/prakaras/:prakaras',routes.views.prakaras);
	app.get('/nityapanchangas',routes.views.nityapanchangas)
	app.get('/history',routes.views.history);
	app.get('/committeeslist', routes.views.committeeslist);
	app.get('/committees/:committees',routes.views.committees);
	app.all('/contact', routes.views.contact);
};
