app.controller('AdminController', function ($scope,DisplayBeerFactory,BeerDetails,AuthService,beers,categories,styles,breweries){
	$scope.beers = beers
	$scope.categories = categories
	$scope.styles = styles
	$scope.breweries = breweries

	$scope.editAction = true
	$scope.addAction = false

	$scope.adminAction = {
		edit: true,
		add: false,
		order: false
	}

	$scope.currentAction = 'edit'

	$scope.selectedBeerId = undefined
	$scope.selectedBeer = undefined

	$scope.message = undefined

	$scope.toggleAction = function (action){
		for(var key in $scope.adminAction){
			$scope.adminAction[key] = false
			$scope[key] = '0'
		}
		$scope.adminAction[action] = true
		$scope[key] = '1'
		$scope.currentAction = action
	}

	$scope.getBeer = function (){
		DisplayBeerFactory.getBeerById($scope.selectedBeerId)
		.then(function (beer){
			$scope.selectedBeer = beer[0]
			console.log(beer[0])
		})
	}

	$scope.upsertBeer = function (){
		debugger
		var newBeer = {}
		newBeer._id = $scope.selectedBeer._id
		if($scope.selectedBeer.cat_id != -1) newBeer.cat_oid = $scope.selectedBeer.cat_oid._id || undefined
		newBeer.name = $scope.selectedBeer.name
		newBeer.descript = $scope.selectedBeer.descript
		newBeer.tags = $scope.selectedBeer.tags
		if($scope.selectedBeer.style_id != -1) newBeer.style_oid = $scope.selectedBeer.style_oid._id 
		if($scope.selectedBeer.brewery_id != -1) newBeer.brewery_oid = $scope.selectedBeer.brewery_oid._id || undefined

		console.log("new beer",newBeer)
		BeerDetails.upsertBeer(newBeer)
		.then(function(beer){
			debugger
			console.log(beer)
			var m = ''
			if($scope.adminAction.edit) m = 'updated'
			if($scope.adminAction.add)	m = 'added'
			$scope.message = "Beer successfully " + m
		})
	}
})