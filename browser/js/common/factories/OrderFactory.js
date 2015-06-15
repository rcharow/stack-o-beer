app.factory('OrderFactory',function($http){
    return {
        makeOrder: function(user,cart) {

            cart = cart.map(function(a){
               return {productId: a._id, quantity: a.quantity}
           })
            return $http.post('/api/order', {
                userId: user._id, items: cart
            }).then(function (results) {
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