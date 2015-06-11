app.controller('BrowseController',function ($scope, DisplayBeerFactory){
	$scope.beers = DisplayBeerFactory.getBeerById('55760355bc48bd122edf463c')
})

