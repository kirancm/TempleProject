var keystone = require('keystone');
var Types = keystone.Field.Types;


var Nityapanchangas = new keystone.List('Nityapanchangas', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Nityapanchangas.add({
	title: { type: String, required: true },
	date: {type: Types.Date},
	suryodaya: { type: Types.Text},
	samvatsara: { type: Types.Text},
	ayatana: { type: Types.Text},
	rutu: { type: Types.Text},
	maasa: { type: Types.Text},
	paksha: { type: Types.Text},
	tithi: { type: Types.Text},
	vaara: { type: Types.Text},
	nakshatra: { type: Types.Text},
	yoga: { type: Types.Text},
	karana: { type: Types.Text},
	rahukaala: { type: Types.Text},
	yamagandakala: { type: Types.Text}
});

Nityapanchangas.defaultColumns = 'date';
Nityapanchangas.register();
