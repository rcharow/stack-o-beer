'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Order = mongoose.model('Order')

router.get('/',function (req,res,next){
	console.log('in order route')
	var modelParams = {}
	if(req.query.userId) modelParams.userId = req.query.userId
	if(req.query.date) modelParams.date = req.query.date
	if(req.query.startDate){
		req.query.date = {}
		req.query.date.$gte = req.query.startDate
	}
	if(req.query.endDate){
		req.query.date = req.query.date || {}
		req.query.date.$lte = req.query.endDate
	}

	Order.find(modelParams)
	.populate('userId')
	.exec()
	.then(function (orders){
		res.json(orders.sort(function(a,b){
			if(a.date > b.date) return -1
			if(b.date > a.date) return 1
			return 0
		}))
	},next)
})
