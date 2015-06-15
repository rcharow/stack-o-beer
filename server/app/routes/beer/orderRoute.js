var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var User = mongoose.model('User')
var Order = mongoose.model('Order')

module.exports = router

//return all the orders. should probably set a limit on that fin
//at some point
router.get('/', function(req,res,next){

	var modelParams = {}
	if(req.query._id) modelParams._id = req.query._id
	
	Order.find(modelParams).exec().then(function(orders){
		res.send(orders)
	})


})

//making a new order
router.post('/',function(req,res,next){
	Order.create(req.body).then(function(order){
		User.findById(order.userId).exec().then(function(user){
			console.log('User was Found', user)
			user.order.push(order._id)
			user.save();

		}, function(err){console.log(err, 'Filaed to find User')})
		.then(function(order){
			res.send(order)
		})
	},function(err){console.log(err, 'failed to create order')})
})

//update something about an order
router.put('/',function(req,res,next){
	Order.findOneAndUpdate({_id: req.body._id},req.body,{new: true})
	.exec()
	.then(function(order){
		res.json(order)
	},function(err){console.log(err, 'failed to update order')})
	.then(function(order){
		res.send(order)
	})
})






