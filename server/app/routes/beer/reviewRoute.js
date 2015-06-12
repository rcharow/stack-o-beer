'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Review = mongoose.model('Review')

module.exports = router

router.get('/:beerId', function (req,res, next){
	Review.find({beerId: req.params.beerId})
	.exec()
	.then(function(reviews){
		console.log('REVIEWS', reviews)
		res.json(reviews)
	},next)
})

router.post('/',function (req,res,next){
	Review.create(req.body)
	.then(function (review){
		res.json(review)
	},next)
})