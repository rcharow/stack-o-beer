app.controller('MainController',function($scope, $modal, SideBarFactory, DisplayBeerFactory, AuthService, $rootScope, UpdateCart){
	
	var loggedInUser;
	//get all categories
	SideBarFactory.getBeerCategories().then(function(categories){
		$scope.categories = categories;
	})

	$scope.goToCategory= function(categoryID){
		DisplayBeerFactory.getBeerByCategory(categoryID).then(function(beers){
			$scope.beers= beers
			return
		})
	}

	AuthService.getLoggedInUser().then(function (user){
	if(user)
		{	
			loggedInUser= user;	
		    $scope.user= user	
		}
	})

	$scope.displayBeer = function (beer){
		var modalProduct = $modal.open({
			animation: $scope.animationEnabled,
			templateUrl: '/js/common/templates/productDetails.html',
			controller: 'ProductController',
			size: 'lg',
			resolve: { 
				beer:function(){return beer},
				user:function(){if(loggedInUser){return loggedInUser} else{ return null}}
			}


		})

	}

})