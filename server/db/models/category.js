var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	cat_name: {Type: String, required: true},
	id: {Type: Number, required: true}
})

mongoose.model('Category', schema);