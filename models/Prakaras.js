var keystone = require('keystone');
var Types = keystone.Field.Types;


var Prakaras = new keystone.List('Prakaras', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Prakaras.add({
	title: { type: String, required: true},
	image: {
                type: Types.LocalFile,
                dest: 'public/uploads/images/Prakaras',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif']
        },
	description: { type: Types.Html, wysiwyg: true, height: 400 }
});

Prakaras.defaultColumns = 'title';
Prakaras.register();
