app.config(function($stateProvider,$locationProvider) {
	$stateProvider.state('home'{
		url: '/',
		templateUrl: '/templates/home.html'//,
		// controller:
	})
	$stateProvider.state('cart',{
		url: '/cart',
		templateUrl: '/templates/cart.html'//,
		// controller:
	})
	$stateProvider.state('productDetail',{
		url: '/product',
		templateUrl: '/templates/product.html'//,
		// controller:
	})
	
	$stateProvider.state('cart.checkout',{
		url: '/cart/checkout',
		templateUrl: '/templates/checkout.html'//,
		// controller:
	})
	
	
})