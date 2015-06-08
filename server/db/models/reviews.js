var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	beerId: {Type: mongoose.Schema.Type.ObjectId, ref: 'Beer'},
	userId: {Type: mongoose.Schema.Type.ObjectId, ref: 'User'},
	rating: {Type: Number, required: true},
	comment: {Type: String, required: true}
})

mongoose.model('Review', schema);