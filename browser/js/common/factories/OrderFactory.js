app.factory('OrderFactory',function($http){
    return {
        makeOrder: function(user,cart,shipping) {
            console.log("shipping info", shipping)
            cart = cart.map(function(a){
                debugger
               return {productId: a._id, quantity: a.quantity}
           })
            var info = {items: cart, shipping: shipping}
            if(user) info.userId = user._id
            return $http.post('/api/order',info)
            .then(function (results) {
                return results.data
            })
        },

        updateOrder: function(order){
        	return $http.put('/api/order',order)
            .then(function(results){
       			return results.data
       		})
        },

        getOrder: function(id){
        	var query = {}
        	query._id = id
        	return $http.get('/api/order',{
        		params: query
        	}).then(function(order){
        		return order.data
        	})
        }



	}
})