var _ = require('underscore');


/**
	Initialises the standard view locals
*/

exports.initLocals = function(req, res, next) {
	
	var locals = res.locals;
	
	locals.navLinks = [
		{ label: 'ಮುಕಪುಟ',		key: 'home',		href: '/' },
		{ label: 'ಲೇಕನ ',		key: 'blog',		href: '/blog' },
		{ label: 'ಇವೆಂಟ್', key: 'events',	 href: '/eventlist' },
		{ label: 'ಪೂಜೆಗಳು', dropdown : [{
                     label: 'ವಿಶೇಷ ಪೂಜೆಗಳು', key: 'poojas', href: '/poojaslist'
				},
				{
					 label: 'ಹಬ್ಬಗಳು', key: 'festivals', href: '/festivalslist'
				}]
		},
		{ label: 'ಸಂಘಗಳು', key: 'committees', href: '/committeeslist'},
		{ label: 'ದೇವಸ್ಥಾನ', dropdown : [{
					label: 'ಇತಿಹಾಸ', key: 'history', href: '/history'
				},{
			    	label: 'ಪ್ರಕಾರಗಳು', key: 'templeprakara', href: '/prakaraslist'
				}]
		},
		{ label: 'ಗ್ಯಾಲರಿ',		key: 'gallery',		href: '/gallery' },
		{ label: 'ಸಂಪರ್ಕಮಾಡಿ',		key: 'contact',		href: '/contact' }
	];
	
	locals.user = req.user;
	
	next();
	
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {
	
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	
	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
	
	next();
	
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {
	
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
	
};
