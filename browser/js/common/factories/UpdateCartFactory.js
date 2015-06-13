app.factory('UpdateCart', function($http, $rootScope, AuthService){

	var cartArray = []
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

    function insertItem(item, user, quantity){
    	console.log('item', item)
    	console.log('user', user)
    	item.quantity = quantity
    	if(user){
    		console.log('here')
			return $http.put('/api/user', {
				user: user, item: item
			}).then(function(response){
				console.log('asdasd',response.data)
				return response.data
			}) 
	}
		else{

			cartArray.push(item);
			var jsonStr = JSON.stringify(cartArray);
			localStorage.setItem("cartSession", jsonStr);
			return
		}


	}
	
	function getCart(user){
		var query = {userId: user._id}
		return $http.get('/api/checkout',query).then(function(response){
			return response.data
		})
	}
	
	return{
		insertItem: insertItem,
		getCart: getCart
	}
})