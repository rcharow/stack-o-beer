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
'MAKE SURE TO FIX THIS BECAUSE ITS IMPORTANT. YEAH!'

router.post('/',function (req,res,next){
	var _order
	Order.create(req.body)
	.then(function(order){
		_order = order
		console.log("in create",_order)
		var data = {order: order}
		if(order.userId)
			data.userId = order.userId
		return data
	})
	.then(function (data){
		if(data.userId){
			console.log("in if statement")
			return User.findById(data.userId)
			.exec()
			.then(function(user){
				console.log("in user then")
				user.order.push(data.order._id)
				return user.save()
			}, function(err){
				return next(err)
			})
		}

	})
	.then(function(){
		res.json(_order)
	},function(err){
		return next(err)
	})
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






