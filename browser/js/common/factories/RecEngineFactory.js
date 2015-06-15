app.factory('RecEngine', function($http){

	return{
		getUserFavorites: function (user){
			return $http.get('/api/favorites',{params: user}).then(function(beer){
				return beer.data
			})
		}
	}
})