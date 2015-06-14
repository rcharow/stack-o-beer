var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var User = mongoose.model('User')

module.exports = router

router.get('/', function(req,res,next){
	User.find({_id: req.query.userId}).exec().then(function(user){
		res.send(user.cart)
		console.log('user', user.cart)
	},next)
})