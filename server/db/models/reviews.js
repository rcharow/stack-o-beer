var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	beerId: {type: mongoose.Schema.Type.ObjectId, ref: 'Beer'},
	userId: {type: mongoose.Schema.Type.ObjectId, ref: 'User'},
	rating: {type: Number, required: true, min: 0, max: 5},
	comment: {type: String, required: true}
})

module.exports = mongoose.model('Review', schema);