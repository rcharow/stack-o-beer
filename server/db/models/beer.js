'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {type: String, required: true},
	cat_id: {type: String, required: true},
	cat_oid: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
	style_id: {type: String, required: true},
	style_oid: {type: mongoose.Schema.Types.ObjectId, ref: 'Style'},
	descript: {type: String},
	abv: {type: Number, required: true},
	price: {type: Number, required: true, default: Math.floor(Math.random()*35)},
	photo: {type: String},
	brewery_id: {type: Number},
	brewery_oid: {type: mongoose.Schema.Types.ObjectId, ref: 'Brewery'},
	rating: {type: Number, required:true, default: 0},
	packaging: {
		size: {type: Number},
		units: {type: String},
		quantity: {type: Number},
		container: {type: String}
	},
	stock: {type: Number, required: true, default: Math.floor(Math.random()*50)},
	tags: {type: [String]}

})


mongoose.model('Beer', schema);