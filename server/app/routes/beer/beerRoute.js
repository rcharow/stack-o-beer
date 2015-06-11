'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')

router.get('/',function (req,res,next){
	console.log('req',req.query)
	var modelParams = {}

	if(req.query.beerId) modelParams._id = req.query.beerId
	if(req.query.styleId) modelParams.style_oid = req.query.styleId
	if(req.query.catId) modelParams.cat_oid = req.query.catId

	console.log(modelParams)
	Beer.find(modelParams)
	.exec()
	.then(function(beers){
		console.log(beers)
		res.json(beers.length)
	},next)
})

module.exports = router