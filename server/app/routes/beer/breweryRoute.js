'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Brewery = mongoose.model('Brewery')
var Q = require('q')

module.exports = router

router.get('/', function (req, res, next){
	Beer.find()
	.distinct('brewery_oid',function(err,brewIds){
		Brewery.find({_id: { $in: brewIds } })
		.exec()
		.then(function(breweries){
			res.json(breweries)
		},next)
	})
})