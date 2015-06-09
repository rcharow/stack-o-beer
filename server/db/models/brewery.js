'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {Type: String, required: true},
	city: {Type: String, required: true},
	state: {Type: String, required: true},
	website: {Type:String, required:true},
	rating: {Type: Number, required: true, default: 0},
	id: {Type: Number, required: true}
})


module.exports = mongoose.model('Brewery', schema);