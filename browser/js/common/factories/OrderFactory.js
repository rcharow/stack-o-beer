app.factory('OrderFactory',function($http){
    return {
        makeOrder: function(user,cart) {
            return $http.post('/api/order', {
                useId: user._id, items: cart
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