var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var User = mongoose.model('User')

module.exports = router

router.put('/', function (req, res, next){

	


	User.update({_id: req.body.user._id}, {$push: {cart: {$each:req.body.item }}}).exec().then(function(user){

		console.log('user is', user)			

			res.send('YOO');
	}).then(next, function(err){
		console.log('error is',err)
	})
	
})