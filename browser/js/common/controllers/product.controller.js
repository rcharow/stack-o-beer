app.controller('ProductController', function($scope,$modalInstance,beer){
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

})