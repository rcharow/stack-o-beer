'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var beer = require('Beer')
var category = require('category')

router.get('/categories', function(req, res){
	console.log('YOOOOOOOOO');

	return category.find().exec().then(function(cats){
		console.log(cats);
		res.json(cats)
	},function(err){
		res.status(500).end()
	})

})