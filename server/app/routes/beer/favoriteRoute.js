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

router.get('/', function (req,res,next){

	console.log('Req.user.id', req.user._id)
	res.send('Success')
})