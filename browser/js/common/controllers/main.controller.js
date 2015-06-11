app.controller('MainController',function($scope,$modal,DisplayBeerFactory,SideBarFactory){
	SideBarFactory.getBeerCategories().then(function(categories){

		$scope.categories = categories;

	})

	$scope.goToCategory = function(categoryID){
		DisplayBeerFactory.getBeerByCategory(categoryID).then(function(beers){

			$scope.beers = beers
		})
	}

	$scope.displayBeer = function (beer){
		var modalProduct = $modal.open({
			animation: $scope.animationEnabled,
			templateUrl: '/js/common/templates/productDetails.html',
			controller: 'ProductController',
			size: 'lg',
			resolve: { 
				beer:function(){return beer}
			}
		})
	}
})