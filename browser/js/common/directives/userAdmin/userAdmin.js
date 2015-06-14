app.directive('edituserform',function (User){
	return {
		restrict: 'E',
	        scope: {
	        	users: "=allusers",
	        	update: "&"

	        },
	        templateUrl: 'js/common/directives/userAdmin/userAdmin.html',
	        link: function (scope){
	        	scope.success = undefined
	        	scope.error = undefined
	        	scope.selectedUserId = undefined

	        	scope.getUser = function (){
	        		scope.users.forEach(function (user){
	        			if(user._id===scope.selectedUserId)
	        				scope.user = user
	        		})
	        		scope.success = undefined
	        		scope.error = undefined
	        	}

	        	scope.updateUser = function() {
	        		User.adminUpdateUser(scope.user)
	        		.then(function (user){
	        			if(user){
		        			scope.users.forEach(function (oldUser){
		        				if(oldUser._id === user._id)
		        					oldUser = user
		        			})

		        			scope.success = 'User successfully updated'
		        			scope.error=undefined
		        		}else{
		        			scope.error = "Error updating user"	
		        		}
	        		},function (err){
	        			scope.error = "Error updating user"
	        			scope.success = undefined
	        		})
	        	}
	        }
    }
})