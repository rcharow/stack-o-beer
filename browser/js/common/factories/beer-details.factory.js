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
		upsertBeer: function (beer,action){
			if(action==='add'){
				return $http.post('api/beer',beer)
				.then(function (beer){
					return {
						message: 'success',
						beer: beer.data
					}
				},function (err){
					return {
						message: 'error'
					}
				})
			}else if(action==='update'){
				return $http.put('api/beer',beer)
				.then(function (beer){
					return {
						message: 'success',
						beer: beer.data
					}
				},function (err){
					return {
						message: 'error'
					}
				})
			}
		}
	}
})