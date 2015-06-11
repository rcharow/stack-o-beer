
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/beer-test').connection;
require('../server/db/models/beer');
require('../server/db/models/category');
require('../server/db/models/style');
require('../server/db/models/brewery');

var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var BeerStyle = mongoose.model('Style')
var Brewery = mongoose.model('Brewery')

var Q = require('q')

//add category _id
// Beer.find()
// .exec()
// .then(function(beers){	
// 	var convertedBeers = []
// 	beers.forEach(function(beer){
// 		var beerPromise = Category.findOne({id: beer.cat_id})
// 		.exec()
// 		.then(function(cat){
// 			if (!cat) return;
// 			beer.cat_oid = cat._id
// 			return Q.ninvoke(beer,'save').then(null, function(err){
// 				console.error('beer save err:', err);
// 				throw err;
// 			});
// 		})
// 		convertedBeers.push(beerPromise)
// 	});
// 	return Q.all(convertedBeers)
// }).then(function(beers){
// 	console.log('done',beers[0])
// }).then(null,console.error)


//add style _id
// Beer.find()
// .exec()
// .then(function(beers){	
// 	var convertedBeers = []
// 	beers.forEach(function(beer){
// 		var beerPromise = BeerStyle.findOne({id: beer.style_id})
// 		.exec()
// 		.then(function(style){
// 			if (!style) return;
// 			beer.style_oid = style._id
// 			return Q.ninvoke(beer,'save').then(null, function(err){
// 				console.error('beer save err:', err);
// 				throw err;
// 			});
// 		})
// 		convertedBeers.push(beerPromise)
// 	});
// 	return Q.all(convertedBeers)
// }).then(function(beers){
// 	console.log('done',beers[0])
// }).then(null,console.error)


//add brewery _id
Beer.find()
.exec()
.then(function(beers){	
	var convertedBeers = []
	beers.forEach(function(beer){
		var beerPromise = Brewery.findOne({id: beer.brewery_id})
		.exec()
		.then(function(brewery){
			if (!brewery) return;
			beer.brewery_oid = brewery._id
			return Q.ninvoke(beer,'save').then(null, function(err){
				console.error('beer save err:', err);
				throw err;
			});
		})
		convertedBeers.push(beerPromise)
	});
	return Q.all(convertedBeers)
}).then(function(beers){
	console.log('done',beers[0])
}).then(null,console.error)