app.factory('DisplayBeerFactory', function($http){

	return {
		getTypeBeer: function(category){

			return $http.get('api/beer/categories/'+category).then(function(results)
			{
				console.log(results.data)
			})
		}
	}
})