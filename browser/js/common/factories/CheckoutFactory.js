app.factory('CheckoutFactory',function($http){
    return {
        checkout: function(user,cart) {
            return $http.post('/api/order', {
                useId: user, items: cart
            }).then(function (results) {
                return results
            })
        }
}
})