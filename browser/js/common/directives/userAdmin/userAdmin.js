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
	        	scope.delete = false

	        	scope.userError = function (){
	        		scope.error = "You must select a user"
	        		scope.success = undefined
	        	}

	        	scope.getUser = function (){
	        		scope.users.forEach(function (user){
	        			if(user._id===scope.selectedUserId)
	        				scope.user = user
	        		})
	        		scope.success = undefined
	        		scope.error = undefined
	        		scope.delete = false
	        	}

	        	scope.updateUser = function() {
	        		if(!scope.user){
	        			scope.userError()
	        			return
	        		}

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

	        	scope.deleteUser = function () {
	        		if(!scope.user){
	        			scope.userError()
	        			return
	        		}

	        		User.deleteUser(scope.user._id)
	        		.then(function (user){
	        			if(user){
	        				for(var i=0;i<scope.users.length;i++){
	        					if(scope.users[i]._id===user._id){
	        						scope.users.splice(i,1)
	        						break;
	        					}
	        				}
	        				scope.success = "User successfully deleted"
	        				scope.error = undefined
	        				scope.user = undefined
	        				scope.delete = false

	        			}else{
	        				scope.error = "Error deleting user"	
	        				scope.success = undefined
	        			}

	        		})
	        	}

	        	scope.checkDeleteUser = function () {
	        		if(!scope.user){
	        			scope.userError()
	        			return
	        		}
	        		scope.delete = true
	        	}

	        	scope.cancelDelete = function () {
	        		scope.delete = false
	        	}
	        }
    }
})