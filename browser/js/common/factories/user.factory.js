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
			return $http.put('/api/user/admin',user)
			.then(function (results){
				return results.data
			},function (err){
				console.log("error admin updating user")
			})
		},
		deleteUser: function (userId){
			console.log("user in delete factory",userId)
			return $http.delete('/api/user/'+userId)
			.then(function (results){
				debugger
				return results.data
			},function (err){
				debugger
				console.log("error deleting user")
				return 
			})
		},
		clearCart: function(user){
			return $http.put('/api/user/clear',user).then(function(results){
				return results.data
			})
		}
	}
})