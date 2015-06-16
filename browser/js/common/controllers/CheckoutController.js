
app.controller('checkoutController',function($scope, AuthService, OrderFactory,$state, $modal){
    var local = localStorage.getItem('cartSession')
    $scope.cartObj = JSON.parse(local)
    $scope.total = 0
    $scope.quantity = undefined
    $scope.editing = false
    console.log($scope.cartObj)
    $scope.cartObj.forEach(function(item){
        $scope.total += (item.price *item.quantity)
    })
    $scope.back = function(){
        $state.go('home.main')
    }
    
    $scope.checkout = function(user,cart){
        OrderFactory.makeOrder(user,cart).then(function(){
            $state.go('thanks')
        })
    }
    $scope.edit= function(item){
        $scope.editing = true

    }
    $scope.kill = function(item){

    }
    $scope.edited = function(item){
        var temp = $scope.cartObj.indexOf(item)
        
    }

    $scope.displayOrder = function (user,cart){
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