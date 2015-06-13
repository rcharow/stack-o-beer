app.factory('UpdateCart', function($http, $rootScope, AuthService){

	var getCartSession = localStorage.getItem("cartSession");
		//on the login event insert items from localStorage to DB Storage
    $rootScope.$on('auth-login-success', function(){
		
		AuthService.getLoggedInUser().then(function (user){
			var cartObj = JSON.parse(getCartSession);
			insertItem(cartObj,user).then(function(){
						console.log('merged CARTS!')
			})
		})	
	})

    function insertItem(item, user){

			var query = {};
			console.log('ITEM IS', item)
			console.log('USER IS', user)
			query.item = item;
			query.user = user;
			return $http.put('/api/user', {
				user: user, item: item
			}).then(function(response){
				return response.data
			})


		}
	return{
		insertItem: insertItem
	}
})