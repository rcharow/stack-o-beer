
app.controller('MainController',function($scope, $modal, SideBarFactory, DisplayBeerFactory, AuthService, $rootScope, UpdateCart, Review, user, RecEngine){
	
	var loggedInUser;
	$scope.user = user
	//get all categories
	SideBarFactory.getBeerCategories().then(function(categories)
	{
		$scope.categories = categories;
	})

	$scope.goToCategory= function(categoryID)
	{	
		DisplayBeerFactory.getBeerByCategory(categoryID).then(function(beers)
		{
			$scope.beers= beers
			return
		})
	}

    // if ($scope.user) $scope.cart = $scope.user.cart

	SideBarFactory.getBeerCategories().then(function(categories){

		$scope.categories = categories;
		if(!$scope.beers)
		{	
			if(user && user.order.length !== 0)
			{   
				console.log($scope.user)
				RecEngine.getUserFavorites(user).then(function(beerRec)
				{
					console.log('BeerRec is', beerRec);
					if(beerRec.length===0 || !beerRec)
					{	console.log(' length zero')
						$scope.goToCategory($scope.categories[0]._id)
					}
					else
					{
						console.log('yessss')
						$scope.beers = beerRec
					}
				})
			}
			else
			{ 
				$scope.goToCategory($scope.categories[0]._id)
			}
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
					reviews: function () {
						return Review.getReviewsByBeerId(beer._id)
					},
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