app.controller('checkoutController',function($scope, AuthService, CheckoutFactory,$state){
    $scope.back = function(){
        $state.go('home.main')
    }
    
    AuthService.getLoggedInUser().then(function(user){
        $scope.user = user
        $scope.cart = $scope.user.cart
    })

    $scope.checkout = function(user,cart){
        CheckoutFactory.checkout(user,cart).then(function(){
            $state.go('home.main')
        })
    }

})