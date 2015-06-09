var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	id: {type: Number, required: true},
	cat_id: {type: Number, required: true},
	style_name: {type: String, required: true}
})

module.exports = mongoose.model('Style', schema);