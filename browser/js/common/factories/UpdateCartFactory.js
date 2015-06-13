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

	 $rootScope.$on('auth-logout-success', function(){
			localStorage.clear()
	})

    function insertItem(item, user, quantity){
    	cartArray.push(item)
    	console.log('cartArray', cartArray)
    	console.log('user', user)
    	item.quantity = quantity
    	if(user){
    		console.log('here')
			return $http.put('/api/user', {
				user: user, item: cartArray
			}).then(function(response){
				console.log('asdasd',response.data.cart)

				response.data.cart.forEach(function(cartItem){
					if(typeof cartItem === Object){
						cartArray.push(cartItem)
						console.log('item is an object')
					}
				})
				var jsonStr = JSON.stringify(response.data.cart);
				localStorage.setItem("cartSession", jsonStr);


				return response.data
			}) 
	}
		else{

			cartArray.push(item)
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