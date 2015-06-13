app.controller('AdminController', function ($scope,DisplayBeerFactory,AuthService,beers){
	$scope.beers = beers
	$scope.adminAction = {
		edit: false,
		add: true
	}

	$scope.toggleAction = function (action){
		for(var key in $scope.adminAction){
			$scope.adminAction[key] = false
		}

		$scope.adminAction[action] = true
	}
})