app.factory('OrderFactory',function($http){
    return {
        makeOrder: function(user,cart) {
            return $http.post('/api/order', {
                userId: user._id, items: cart
            }).then(function (results) {
                return results.data
            })
        },

        updateOrder: function(user, cart,orderStatus){
        	return $http.put('/api/'+user._id,{
        		cart:cart, orderStatus: orderStatus
       		}).then(function(results){
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