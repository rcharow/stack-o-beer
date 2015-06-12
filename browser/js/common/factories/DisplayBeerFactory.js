app.factory('DisplayBeerFactory', function($http){

	return {
		getTypeBeer: function(category){

			return $http.get('/api/beer/categories/'+category).then(function(results)
			{
				console.log(results.data)
			})
		},
		getBeerById: function(id){
			var query = {};
			query.beerId = id
			return $http.get('/api/beer',{
				params: query
			})
			.then(function(beer){
				console.log("BEER DATA",beer.data)
				return beer.data
			})
		}

	}
})