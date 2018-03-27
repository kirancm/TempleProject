var keystone = require('keystone');
var Types = keystone.Field.Types;


var Poojas = new keystone.List('Poojas', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Poojas.add({
	title: { type: String, required: true},
	image: {
                type: Types.LocalFile,
                dest: 'public/uploads/images/Poojas',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif']
        },
	price: { type: Types.Money},
	requirments: { type: Types.Html, wysiwyg: true, height: 400 },
	description: { type: Types.Html, wysiwyg: true, height: 400 }
});

Poojas.defaultColumns = 'title, price|20%';
Poojas.register();
