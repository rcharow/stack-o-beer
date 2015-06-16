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
				insertItem(cartObj,user).then(function()
				{
							console.log('merged CARTS!')
			}
			)}
		})	
	})

	$rootScope.$on('auth-logout-success', function()
	{
		localStorage.clear()
	})

    function insertItem(item, user, quantity)
    {	
    	var beer = item
    	var duplicateItem = false;
    	//if user is not logged in or already logged in

    	console.log('quantity is', quantity)
    	if(!Array.isArray(beer))
    	{
    		cartArray.forEach(function (beerInCart,i)
    		{ 	
    			if (beerInCart._id === item._id)
    			{	
    				beerInCart.quantity += quantity;
    				duplicateItem = true;
    				var jsonStr = JSON.stringify(cartArray);
					localStorage.setItem("cartSession", jsonStr);
    			} 
    		})
    		
    		if(duplicateItem === false)
			{	
				beer.quantity= quantity;
				cartArray.push(beer)
				console.log(cartArray)
				var jsonStr = JSON.stringify(cartArray);
				localStorage.setItem("cartSession", jsonStr);
				return
			}
		}
    	//if being called from the event emmitter above
    	else if (Array.isArray(beer))
    	{
    		cartArray=item
    	}
    	if(user)
    	{
			return $http.put('/api/user', 
			{user: user, item: cartArray}).then(function(response)
				{
					var jsonStr = JSON.stringify(response.data.cart);
					localStorage.setItem("cartSession", jsonStr);
					return response.data
				}) 
		}
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