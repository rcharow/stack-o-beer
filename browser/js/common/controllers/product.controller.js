app.controller('ProductController', function($scope,$modalInstance,beer,user,UpdateCart){
	console.log('in pc')
	$scope.beer = beer
	$scope.quantity = 0
	$scope.beer.abv = beer.abv.toFixed(2)
	$scope.isReadOnly = true
	$scope.review = false

	$scope.toggleReview = function(){
		$scope.review = !$scope.review
	}
	$scope.ok = function () {
		$modalInstance.close($scope.selected.item)
	}
	$scope.plus = function(){
		if ($scope.beer.stock >$scope.quantity) $scope.quantity++
		else {
			$scope.error = "Sorry, we can't keep up."
		}
	}
	
	$scope.minus = function(){
		if ($scope.quantity) $scope.quantity--
	}
	
	$scope.addToCart = function(thisBeer){
		cartArray.push(thisBeer);
		var jsonStr = JSON.stringify(cartArray);
		localStorage.setItem("cartSession", jsonStr);
		console.log(jsonStr);

		if (user)
			{	
				var getCartSession = localStorage.getItem("cartSession");
				var cartObj = JSON.parse(getCartSession);
				UpdateCart.insertItem(cartObj,user).then(function(){
					console.log('inserted')
				})
		}
	}
})