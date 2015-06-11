'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	website: {type:String, required:true},
	rating: {type: Number, required: true, default: 0, min: 1, max: 10},
	id: {type: Number, required: true}
})


module.exports = mongoose.model('Brewery', schema);