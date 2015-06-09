'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
// require('../../../server/db/models/beer');
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')

function getObjectParams(paramObj){
	var params = []
	for(var key in paramObj){
		params.push(paramObj[key])
	}

	return params
}

router.get('/categories', function(req, res){
	console.log('YOOOOOOOOO');

	Category.find().exec().then(function(cats){
		console.log('cats',cats);
		res.json(cats)
	},function(err){
		res.status(500).end()
	})

})

router.get('/categories/:categoryId',function(req,res){
	var params = getObjectParams(req.params.categoryId)

	Beer.find({cat_id: { $in: params } })
	.exec()
	.then(function(beers){
		res.json(beers)
	},function(err){
		res.status(500).end()
	})
})

router.get('/style/:styleId', function (req,res){
	var params = getObjectParams(req.params.styleId)

	Beer.find({style_id: { $in: params } })
	.exec()
	.then(function(beers){
		res.json(beers)
	},function(err){
		res.status(500).end()
	})
})

router.get('/:beerId',function (req,res){
	Beer.findOne({_id: req.params.beerId})
	.exec()
	.then(function(beer){
		console.log("BEER",beer)
		res.json(beer)
	},function(err){
		res.status(500).end()
	})
})

module.exports = router