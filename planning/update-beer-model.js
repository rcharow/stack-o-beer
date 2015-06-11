
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/beer-test').connection;
require('../server/db/models/beer');
require('../server/db/models/category');
var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')

var Q = require('q')


Beer.find()
.exec()
.then(function(beers){	
	var convertedBeers = []
	beers.forEach(function(beer){
		var beerPromise = Category.findOne({id: beer.cat_id})
		.exec()
		.then(function(cat){
			if (!cat) return;
			beer.cat_oid = cat._id
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
