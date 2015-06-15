app.factory('SearchBarFactory',function($http){
	return{
		searchForBeer: function(nameOfBeer){
			return $http.get('/api/search/'+nameOfBeer).then(function(results){
				return results.data
			})
		}
	}
})