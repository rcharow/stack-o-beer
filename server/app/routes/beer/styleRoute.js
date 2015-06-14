'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Style = mongoose.model('Style')
var Q = require('q')

module.exports = router

router.get('/', function (req, res, next){
	Beer.find()
	.distinct('style_oid',function(err,styleIds){
		Style.find({_id: { $in: styleIds } })
		.exec()
		.then(function(styles){
			res.json(styles)
		},next)
	})
})