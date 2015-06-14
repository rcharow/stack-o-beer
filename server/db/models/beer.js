'use strict'
var mongoose = require('mongoose')

function cleanTags (tags){
	return tags.map(function (tag){
		return tag.replace(/ /g, '').split(",")
	})
}

var schema = new mongoose.Schema({
	name: {type: String, required: true},
	cat_id: {type: Number},
	cat_oid: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
	style_id: {type: String},
	style_oid: {type: mongoose.Schema.Types.ObjectId, ref: 'Style'},
	descript: {type: String},
	abv: {type: Number, required: true},
	price: {type: String, required: true},
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
	stock: {type: Number, required: true},
	tags: {type: [String]}

})

schema.pre('save',function(next){
	console.log('this tags',this.tags)
	this.tags = cleanTags(this.tags)
	next()
})

schema.pre('update',function(next){
	this.tags = cleanTags(this.tags)
	next()
})


mongoose.model('Beer', schema);