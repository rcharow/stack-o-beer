app.controller('ProductController', function($scope,$modalInstance,AuthService,beer,reviews,user){
	$scope.beer = beer
	$scope.quantity = 0
	$scope.beer.abv = beer.abv.toFixed(2)
	$scope.isReadOnly = true
	$scope.review = false
	$scope.user = user

	$scope.reviews = reviews
	console.log("SCOPE REVIES", $scope.reviews)

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

})