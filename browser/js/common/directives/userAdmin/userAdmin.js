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
	        	}

	        	scope.updateUser = function() {
	        		User.adminUpdateUser(scope.user)
	        		.then(function (user){
	        			if(user){
		        			scope.users.forEach(function (oldUser){
		        				if(oldUser._id === user._id)
		        					oldUser = user
		        			})
		        			scope.user = undefined
		        			scope.success = 'User successfully updated'
		        		}else{
		        			scope.message = "Error updating user"	
		        		}
	        		},function (err){
	        			scope.message = "Error updating user"
	        		})
	        	}
	        }
    }
})