app.controller('orderController', function($scope,$state,$modalInstance,AuthService, user, UpdateCart,OrderFactory, User){
	$scope.user = user
    $scope.shipping = false
    $scope.shippingInfo = {}
	var local = localStorage.getItem('cartSession')
	$scope.cartObj = JSON.parse(local)
    $scope.total = 0
    $scope.cartObj.forEach(function(item){
        $scope.total += (item.price *item.quantity)
    })

    $scope.confirm = function(user, cartObj){

        console.log("user in confirm", user)
    	OrderFactory.makeOrder(user,cartObj,$scope.shippingInfo).then(function(results){
    		console.log('results',results)
            return user
            })
        .then(function(user){
            localStorage.clear()
            $modalInstance.dismiss('cancel')
            $state.go('home.main')
            return user
            })
        .then(function(user){
            if (user){
                user.cart = []
                User.clearCart(user)
            }
            return
        })
    }

    $scope.ship = function(){
        console.log("in shipping")
        $scope.shipping = true
    }



    $scope.cancel = function(){
    	$modalInstance.dismiss('cancel');
    }

})