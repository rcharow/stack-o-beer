app.factory('RecEngine', function($http){

	return{
		getUserFavorites: function (user){
			console.log('user is', user)
			return $http.get('/api/favorites',{params: user}).then(function(response){
				console.log('Response in RecEngine Factory is', response.data)

				}, function(error){
					return 'Error is'+error
				})
		}
	}
})