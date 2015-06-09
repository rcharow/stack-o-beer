
app.config(function($stateProvider,$locationProvider,$urlRouterProvider) {
	$stateProvider.state('browse',{
		url: '/',
		templateUrl: '/js/common/templates/browse.html'//,
		controller:
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

		$stateProvider.state('browse.sidebar',{
		url: '/js/cart/checkout',
		templateUrl: 'js/common/templates/checkout.html'//,
		// controller:
	})



