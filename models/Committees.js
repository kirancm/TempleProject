var keystone = require('keystone');
var Types = keystone.Field.Types;


var Committees = new keystone.List('Committees', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Committees.add({
	title: { type: String, required: true },
	precedent: {type: String},
	image: {
                type: Types.LocalFile,
                dest: 'public/uploads/images/Committees',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif']
        },	
    members:{type: Types.TextArray},
	description: { type: Types.Html, wysiwyg: true, height: 300 },
	activities: { type: Types.Html, wysiwyg: true, height: 200 }
});

Committees.defaultColumns = 'date, author|20%';
Committees.register();
