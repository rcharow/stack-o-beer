var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var User = mongoose.model('User')

module.exports = router

router.put('/', function (req, res, next){

		console.log('Req.body.item is',req.body.item)


	User.findOneAndUpdate({_id: req.body.user._id}, {$push: {cart: {$each:req.body.item }}}).exec().then(function(user){

			res.send(user);
	}).then(next, function(err){
		console.log('error is',err)
	})
	
})

router.put('/admin',function (req,res,next){
	User.findOneAndUpdate({_id: req.body._id}, {admin: req.body.admin, reset: req.body.reset},{new: true})
	.exec()
	.then(function (user){
		res.json(user)
	},next)
})

router.get('/', function (req, res, next){
	User.find()
	.sort([['email', 'ascending']])
	.exec()
	.then(function (users){
		res.json(users)
	},next)
})

router.delete('/:userId',function (req,res,next){
	console.log("about to delete user", req.params.userId)
	User.findByIdAndRemove(req.params.userId)
	.exec()
	.then(function (user){
		console.log("user deleted")
		res.json(user)
	},next)
})