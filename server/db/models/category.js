var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	category: {Type: String, required: true},
	beers: {Type: [mongoose.Schema.Type.ObjectId], ref: 'Beer'},
	description: {Type: String, required: true}
})

mongoose.model('Category', schema);