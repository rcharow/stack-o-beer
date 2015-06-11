'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')

module.exports = router

router.get('/', function (req, res, next){
	
	Category.find().exec().then(function(cats){
		console.log('cats',cats);
		res.json(cats)
	},next)
	

})