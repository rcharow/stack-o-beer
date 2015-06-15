'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose')
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var Style = mongoose.model('Style')
var Brewery = mongoose.model('Brewery')
var Orders = mongoose.model('Order')
var User = mongoose.model('User')

module.exports = router

function getCategoryFrequency(orders){
	var cats ={};
	console.log('In function')

	orders.forEach(function(order){
		console.log('order is', order)
		order.items.forEach(function(item){

			if (!cats[item.productId.cat_oid]){
				cats[item.productId.cat_oid] = 1
			}
			else{
				cats[item.productId.cat_oid]++
			}
		})
	}) 
	return cats
}

function getFavoriteCategory(catObj){

	var count = 0;
	var obj={};
	for (var key in catObj){
		if(count < catObj[key]){
			count = catObj[key]
			obj=key
		}
	}
	return obj;
}

router.get('/', function (req,res,next){
	
	Orders.find({userId: req.user._id}).populate('items.productId').exec().then(function(orders){
		var cats = getCategoryFrequency(orders)
		var favoriteCategory = getFavoriteCategory(cats)
		return favoriteCategory
	}).then(function(favCategory){

		Beer.find({cat_oid: favCategory, rating:{$gte:3}}).limit(15).exec().then(function (beers){
			console.log('Beer is', beers)
			res.send(beers)
		})
	})
})