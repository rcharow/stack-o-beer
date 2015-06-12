app.factory('DisplayBeerFactory', function($http){

	return {

		getBeerByCategory: function(id){
			var query = {}
			query.catId = id
			return $http.get('/api/beer',{
				params : query
			})
			.then(function(beer){
				console.log("BEER DATA",beer.data)
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
				console.log("BEER DATA",beer.data)
				return beer.data
			})
		}

	}
})