app.controller('orderController', function($scope,$modalInstance,AuthService, user, UpdateCart,OrderFactory){
	$scope.user = user
	var local = localStorage.getItem('cartSession')
	$scope.cartObj = JSON.parse(local)
    $scope.total = 0
    $scope.cartObj.forEach(function(item){
        $scope.total += (item.price *item.quantity)
    })

    $scope.comfirm = function(user, cartObj){
    	console.log('user',user)
    	OrderFactory.makeOrder(user,cartObj).then(function(results){
    		console.log('results',results)
    	})
    }

    $scope.cancel = function()

})