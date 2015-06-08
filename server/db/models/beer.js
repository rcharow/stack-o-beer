'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {Type: String, required: true},
	type: {Type: String, required: true},
	description: {Type: String, required: true},
	abv: {Type: Number, required: true},
	price: {Type: Number, required: true},
	photo: {Type: String},
	brewery: {Type: mongoose.Schema.Type.ObjectId, ref: 'Brewery'},
	rating: {Type: Number},
	packaging: {
		size: {Type: Number, required: true},
		units: {Type: String, required: true},
		quantity: {Type: Number, required: true},
		container: {Type: String, required:true}
	},
	stock: {Type: Number, required: true}

})

