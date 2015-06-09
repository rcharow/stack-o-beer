var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	cat_name: {type: String, required: true},
	id: {type: Number, required: true}
})

module.exports = mongoose.model('Category', schema);