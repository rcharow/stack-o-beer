'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {Type: String, required: true},
	cat_id: {Type: String, required: true},
	style_id: {Type: String, required: true}
	descript: {Type: String, required: true},
	abv: {Type: Number, required: true},
	price: {Type: Number, required: true, default: Math.floor(Math.random()*35)},
	photo: {Type: String},
	brewery_id: {Type: Number},
	rating: {Type: Number, required:true, default: 0},
	packaging: {
		size: {Type: Number},
		units: {Type: String},
		quantity: {Type: Number},
		container: {Type: String}
	},
	stock: {Type: Number, required: true, default: Math.floor(Math.random()*50)},
	tags: {Type: [String]}

})


module.exports = mongoose.model('Beer', schema);