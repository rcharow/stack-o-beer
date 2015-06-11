app.controller('ProductController', function($scope,$modalInstance,beer){
	$scope.beer = beer
	$scope.quantity = 0
	$scope.beer.stock = 10
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