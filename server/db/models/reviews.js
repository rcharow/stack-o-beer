var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	beerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Beer'},
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	rating: {type: Number, required: true, min: 0, max: 5},
	comment: {type: String, required: true}
})

module.exports = mongoose.model('Review', schema);