var keystone = require('keystone');
var Types = keystone.Field.Types;


var Mod = new keystone.List('Mod', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Mod.add({
	title: { type: String, required: true },
	date: {type: Types.Date},
	author: { type: Types.Text},
	message: { type: Types.Html, wysiwyg: true, height: 400 }
});

Mod.defaultColumns = 'date, author|20%';
Mod.register();
