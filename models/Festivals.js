var keystone = require('keystone');
var Types = keystone.Field.Types;


var Festivals = new keystone.List('Festivals', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Festivals.add({
	title: { type: String, required: true},
	image: {
                type: Types.LocalFile,
                dest: 'public/uploads/images/Festivals',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif']
        },
	description: { type: Types.Html, wysiwyg: true, height: 400 },
	lastyearphotos: {type: String}
});

Festivals.defaultColumns = 'title';
Festivals.register();
