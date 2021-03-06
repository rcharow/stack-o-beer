'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var Style = mongoose.model('Style')
var Brewery = mongoose.model('Brewery')

router.get('/',function (req,res,next){
	console.log('req',req.query)
	var modelParams = {}
	if(req.query.beerId) modelParams._id = req.query.beerId
	if(req.query.styleId) modelParams.style_oid = req.query.styleId
	if(req.query.catId) modelParams.cat_oid = req.query.catId

	Beer.find(modelParams)
	.populate('brewery_oid style_oid cat_oid')
	.limit(20)
	// .sort([['name', 'ascending']])
	.exec()
	.then(function(beers){
		res.json(beers.sort(function(a,b){
			if(a.name > b.name) return 1
			if(a.name < b.name) return -1
			return 0
		}))
	},next)
})


router.put('/',function (req,res,next){
	
	Beer.findOneAndUpdate({_id: req.body._id}, req.body, {upsert: true, new: true},function(err,beer){
		if(err) return next(err)
		res.json(beer)
	})
})

router.post('/',function (req,res,next){
	
	Beer.create(req.body)
	.then(function (beer){
		res.json(beer)
	},next)
})


module.exports = router