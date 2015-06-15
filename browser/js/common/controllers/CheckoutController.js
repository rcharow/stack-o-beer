app.controller('checkoutController',function($scope, AuthService, OrderFactory,$state){
    $scope.back = function(){
        $state.go('home.main')
    }
    
    AuthService.getLoggedInUser().then(function(user){
        $scope.user = user
        $scope.cart = $scope.user.cart
    })

    $scope.checkout = function(user,cart){
        OrderFactory.makeOrder(user,cart).then(function(){
            $state.go('thanks')
        })
    }

})