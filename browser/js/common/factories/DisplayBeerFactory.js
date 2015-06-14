app.factory('DisplayBeerFactory', function($http){

	return {

		getAllBeers: function(){
			return $http.get(('api/beer'),{})
			.then(function (beers){
				return beers.data
			})
		},

		getBeerByCategory: function(id){
			var query = {}
			query.catId = id
			return $http.get('/api/beer',{
				params : query
			})
			.then(function(beer){
				return beer.data
			})
		},
		getBeerById: function(id){
			var query = {};
			query.beerId = id
			return $http.get('/api/beer',{
				params : query
			})
			.then(function(beer){
				return beer.data
			})
		}

	}
})