app.factory('Review',function($http){
	return {
		getReviewsByBeerId: function (beerId){
			return $http.get('/api/review/' + beerId)
			.then(function(response){
				return response.data
			},function(err){
				console.log("ERROR getting beer reviews for beer: " + beerId)
			})
		},
		submitUserReview: function (userId,beerId,rating,comment){
			var body = {
				userId: userId,
				beerId: beerId,
				rating: rating,
				comment: comment
			}

			return $http.post('/api/review',body)
			.then(function (response){
				return response.data
			},function (err){
				console.log("ERROR submitting beer review")
			})
		}
	}
})