app.config(function($stateProvider,$locationProvider,$urlRouterProvider) {
	$stateProvider.state('home',{
		templateUrl: '/js/common/templates/home.html',
		controller: 'MainController',
		resolve: {
			user: function (AuthService){
						return AuthService.getLoggedInUser()
						.then(function (user){
							return user
						})
					}
		}
		
	})

	$stateProvider.state('home.main',{
		url:'/browse',
		templateUrl: '/js/common/templates/category.html'
		
	
	})

	$stateProvider.state('checkout',{
		url: '/checkout',
		templateUrl: '/js/common/templates/checkout.html',
		controller: 'checkoutController'
	})

	$stateProvider.state('productDetail',{
		url: '/product',
		templateUrl: '/js/common/templates/product.html'//,
		// controller:
	})

	$stateProvider.state('admin',{
		url: '/admin',
		templateUrl: '/js/common/templates/admin.html',
		controller: 'AdminController',
		resolve: {
			beers: function (DisplayBeerFactory){
				return DisplayBeerFactory.getAllBeers()
			}
		}
	})
	
	// $urlRouterProvider.otherwise('/')
	
})