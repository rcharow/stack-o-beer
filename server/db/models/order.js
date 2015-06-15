var mongoose = require('mongoose')

var orders = 'Created Processing Pending Cancelled Completed'.split(' ')

var schema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: {type: Date, required: true, default: Date.now},
	items: [{
		productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Beer'},
		quantity: {type: Number, required: true}
	}],
	status: {type: String, required: true, enum: orders, default: "Created"}

})
module.exports = mongoose.model('Order', schema);