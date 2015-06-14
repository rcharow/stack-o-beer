app.factory('Order',function ($http){
	return {
		getAllOrders: function (){
			$http.get('/')
		}
	}
})