app.config(function($stateProvider,$locationProvider,$urlRouterProvider) {
	$stateProvider.state('home',{
		templateUrl: '/js/common/templates/home.html',
		controller: "BrowseController"
	})

	$stateProvider.state('home.main',{
		url:'/browse',
		templateUrl: '/js/common/templates/category.html'
	
	})

	$stateProvider.state('cart',{
		url: '/cart',
		templateUrl: '/js/common/templates/cart.html'//,
		// controller:
	})
	$stateProvider.state('productDetail',{
		url: '/product',
		templateUrl: '/js/common/templates/product.html'//,
		// controller:
	})
	
	$stateProvider.state('cart.checkout',{
		url: '/js/cart/checkout',
		templateUrl: 'js/common/templates/checkout.html'//,
		// controller:
	})
	
	// $urlRouterProvider.otherwise('/')
	
})