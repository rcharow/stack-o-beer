var mongoose = require('mongoose')

var orders = 'Pending Fulfilled Cancelled Delayed'.split(' ')

var schema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: {type: Date, required: true, default: Date.now},
	items: [{
		productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Beer'},
		price: {type: Number, required: true},
		quantity: {type: Number, required: true}
	}],
	status: {type: String, required: true, enum: orders}

})
module.exports = mongoose.model('Order', schema);