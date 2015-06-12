var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://beer:good@apollo.modulusmongo.net:27017/bo3duxOd').connection;
require('../server/db/models/beer');
require('../server/db/models/category');
require('../server/db/models/style');
require('../server/db/models/brewery');
require('../server/db/models/reviews');

var Beer = mongoose.model('Beer')
var Category = mongoose.model('Category')
var BeerStyle = mongoose.model('Style')
var Brewery = mongoose.model('Brewery')
var Review = mongoose.model('Review')

var Q = require('q')

// Review.create({
// 	beerId: '55760355bc48bd122edf33df',
// 	userId: '557b0cd4e187b90c2dc7785c',
// 	rating: 4,
// 	comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel purus mauris. Donec vel neque convallis," +
// 	"laoreet velit id, fringilla mauris. Duis eget ligula rhoncus, bibendum metus at, pellentesque ipsum. Aliquam erat volutpat." +
// 	"Nam eu mollis eros. Duis molestie ut magna id condimentum. Vestibulum eget fermentum lectus, nec porta arcu."
// })

Beer.find()
.exec()
.then(function(beers){	
	var newReviews = []
	beers.forEach(function(beer){
		for(var i=0;i<3;i++){
			Review.create({
				beerId: beer._id,
				userId: '557b0cd4e187b90c2dc7785c',
				rating: Math.floor(Math.random()*5),
				comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel purus mauris. Donec vel neque convallis," +
				"laoreet velit id, fringilla mauris. Duis eget ligula rhoncus, bibendum metus at, pellentesque ipsum. Aliquam erat volutpat." +
				"Nam eu mollis eros. Duis molestie ut magna id condimentum. Vestibulum eget fermentum lectus, nec porta arcu."
			})
			
		}
	})
});
	