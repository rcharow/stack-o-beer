'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Review = mongoose.model('Review')

module.exports = router

router.get('/:beerId', function (req,res, next){
	console.log("IN REVIEW ROUTE", req.params.beerId)
	Review.find({beerId: req.params.beerId})
	.exec()
	.then(function(reviews){
		console.log('REVIEWS', reviews)
		res.json(reviews)
	},next)
})