var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	userId: {Type: mongoose.Schema.Type.ObjectId, ref: 'User'},
	date: {Type: Date, required: true, default: Date.now},
	items: [{
		productId: {Type: mongoose.Schema.type.ObjectId, ref: 'Beer'},
		price: {Type: Number, required: true},
		quantity: {Type: Number, required: true}
	}],
	status: {Type: String, required: true},

})
module.exports = mongoose.model('Order', schema);