app.factory('BeerDetails',function ($http){
	return {
		getAllCategories: function(){
			return $http.get('/api/categories').then(function(results)
				{
					return results.data
				}
		)},
		getAllStyles: function(){
			return $http.get('/api/styles').then(function(results)
				{
					return results.data
				}
		)},
		getAllBreweries: function(){
			return $http.get('/api/breweries').then(function(results)
				{
					return results.data
				}
		)},
		upsertBeer: function (beer){
			debugger
			console.log("beer in update factory",beer)
			return $http.post('api/beer',beer)
			.then(function (beer){
				return beer
			},function (err){
				console.log("Error upserting beer")
			})
		}
	}
})