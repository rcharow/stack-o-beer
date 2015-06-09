var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	cat_name: {Type: String, required: true},
	id: {Type: Number, required: true}
})

module.exports = mongoose.model('Category', schema);