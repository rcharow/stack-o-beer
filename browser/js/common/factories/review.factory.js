app.factory('Review',function($http){
	return {
		getReviewsByBeerId: function (beerId){
			return $http.get('/api/review/' + beerId)
			.then(function(response){
				return response.data
			},function(err){
				console.log("ERROR getting beer reviews for beer: " + beerId)
			})
		}
	}
})