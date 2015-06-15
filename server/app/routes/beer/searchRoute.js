'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var Style = mongoose.model('Style')
var Brewery = mongoose.model('Brewery')

module.exports = router


router.get('/:nameOfBeer', function (req,res,next){
	console.log('req.params with index is', req.params.nameOfBeer)
	Beer.find({$text:{$search: req.params.nameOfBeer}}).limit(10).exec().then(function (results){
		console.log('results are', results)
			res.send(results)

	}, function (failure){
		res.send('SEARCH FAILED', failure)
	})
})