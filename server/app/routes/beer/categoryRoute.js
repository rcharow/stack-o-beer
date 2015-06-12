'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var Q = require('q')

module.exports = router

router.get('/', function (req, res, next){
	Beer.find()
	.distinct('cat_oid',function(err,catIds){
		console.log(catIds)
		Category.find({_id: { $in: catIds } })
		.exec()
		.then(function(cats){
			res.json(cats)
		},next)
	})
})