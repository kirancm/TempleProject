var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	image: {
                type: Types.LocalFiles,
                dest: 'public/uploads/images',
                label: 'Image',
                allowedTypes: [ 'image/jpeg', 'image/png', 'image/gif'],
        },
});

Gallery.register();
