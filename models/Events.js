var keystone = require('keystone');
var Types = keystone.Field.Types;


var Events = new keystone.List('Events', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Events.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	when: { type: Types.Datetime, default: Date.now, index: true},
	where: { type: Types.Text},
	image: {
                type: Types.LocalFile,
                dest: 'public/uploads/images/events',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif']
        },
	Detail: { type: Types.Html, wysiwyg: true, height: 400 }
});

Events.defaultColumns = 'title, state|20%, when|20%';
Events.register();
