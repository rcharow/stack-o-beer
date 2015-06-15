
app.controller('checkoutController',function($scope, AuthService, OrderFactory,$state){
    $scope.back = function(){
        $state.go('home.main')
    }
    
    AuthService.getLoggedInUser().then(function(user){
        $scope.user = user
        $scope.cart = $scope.user.cart
        console.log($scope.user.cart)
    })


    $scope.checkout = function(user,cart){
        OrderFactory.makeOrder(user,cart).then(function(){
            $state.go('thanks')
        })
    }

    $scope.displayOrder = function (beer){
            var modalProduct = $modal.open({
                animation: $scope.animationEnabled,
                templateUrl: '/js/common/templates/orderDetails.html',
                controller: 'orderController',
                size: 'lg',
                resolve: { 
                    user: function (AuthService){
                        return AuthService.getLoggedInUser()
                        .then(function (user){
                            return user
                        })
                    }
                }
            })
        }

})