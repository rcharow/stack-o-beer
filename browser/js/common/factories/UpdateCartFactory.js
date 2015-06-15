app.factory('UpdateCart', function($http, $rootScope, AuthService){
	  var cartArray = []
		//on the login event insert items from localStorage to DB Storage
    $rootScope.$on('auth-login-success', function(){

		AuthService.getLoggedInUser().then(function (user){
			var getCartSession = localStorage.getItem("cartSession");
			var cartObj = JSON.parse(getCartSession);
			if (cartObj){
				insertItem(cartObj,user).then(function(){
							console.log('merged CARTS!')
			})}
		})	
	})

	 $rootScope.$on('auth-logout-success', function(){
			localStorage.clear()
	})

    function insertItem(item, user, quantity){
    	var cartArray = [];
    	console.log('item is type',typeof item)

    	//if just a single object
    	if(!Array.isArray(item)){
    		console.log('an object')
    		item.quantity=quantity    
    		cartArray.push(item)
		}
    	
    	//if being called from the event emmitter above
    	if (Array.isArray(item)){
    		console.log('its an array')
    		cartArray=item
    	}
    	if(user){
    		console.log('cartArray in user is',cartArray)
			return $http.put('/api/user', {
				user: user, item: cartArray
			}).then(function(response){

				console.log('data cart',response.data.cart)
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