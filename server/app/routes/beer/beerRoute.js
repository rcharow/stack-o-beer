'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')

router.get('/',function (req,res,next){
	Beer.find(req.query)
	.exec()
	.then(function(beers){
		res.json(beers)
	},next)
})

module.exports = router