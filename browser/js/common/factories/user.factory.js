app.factory ('User',function ($http){
	return {
		getAllUsers: function (){
			return $http.get('/api/user')
			.then(function (results){
				return results.data
			},function (err){
				console.log("error getting all users")
			})
		},
		adminUpdateUser: function (user){
			console.log("user in factory",user)
			return $http.put('/api/user/admin',user)
			.then(function (results){
				return results.data
			},function (err){
				console.log("error admin updating user")
			})
		}
	}
})