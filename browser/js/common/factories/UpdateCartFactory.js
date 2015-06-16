app.factory('UpdateCart', function($http, $rootScope, AuthService){

	var cartArray = []
		//on the login event insert items from localStorage to DB Storage
    $rootScope.$on('auth-login-success', function()
    {	
		AuthService.getLoggedInUser().then(function (user)
		{	
			var getCartSession = localStorage.getItem("cartSession");
			var cartObj = JSON.parse(getCartSession);
			if (cartObj)
			{
				cartObj.forEach(function(item){
					insertItem(item,user, item.quantity).then(function()
					{
								console.log('merged CARTS!')
					})
				})
			}
			else 
			{
				var userCart =JSON.stringify(user.cart)
				console.log('Nothing in session cart')
				localStorage.setItem("cartSession", userCart)
			}
		})	
	})

	$rootScope.$on('auth-logout-success', function()
	{	
		console.log('localStorage cleared from MainController')
		cartArray = [];
		localStorage.clear()
	})

    function insertItem(item, user, quantity)
    {	
    	var beer = item
    	//if user is not logged in or already logged in

    	var duplicateItem = checkForDuplicateItem(beer, quantity, user)
    		
		if(duplicateItem === false)
		{	
			beer.quantity= quantity;
			cartArray.push(beer)
			console.log(cartArray)
			var jsonStr = JSON.stringify(cartArray);
			localStorage.setItem("cartSession", jsonStr);

			if(user)
		    	{   console.log('in the user')
					return $http.put('/api/user', 
					{user: user, item: beer}).then(function(response)
						{  console.log('Response when updating is', response.data)
							var jsonStr = JSON.stringify(response.data.cart);
							localStorage.setItem("cartSession", jsonStr);
							return response.data
						}) 
			}
			
		}
	
	}

	function checkForDuplicateItem(beer, quantity, user){
		console.log('User is', user);
		var duplicateItem = false
		if(user){ cartArray= user.cart}

		cartArray.forEach(function (beerInCart)
    		{ 	
    			if (beerInCart._id === beer._id)
    			{	
    				beerInCart.quantity += quantity;
    				duplicateItem = true;
    				var jsonStr = JSON.stringify(cartArray);
					localStorage.setItem("cartSession", jsonStr);
    			} 
    		})
		return duplicateItem
	}

	function getCart(user)
	{
		var query = {userId: user._id}
		return $http.get('/api/checkout',query).then(function(response)
		{
			return response.data
		})
	}
	
	return{
		insertItem: insertItem,
		getCart: getCart
	}
})