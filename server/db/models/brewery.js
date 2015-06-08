'use strict'
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	name: {Type: String, required: true},
	location: {Type: String, required: true},
	website: {Type:String, required:true},
	foundingYr: {Type: Date, required:false},
	rating: {Type: Number, required: true, default: 0} 
})


mongoose.model('Brewery', schema);