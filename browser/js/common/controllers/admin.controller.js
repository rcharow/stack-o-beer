app.controller('AdminController', function ($scope,DisplayBeerFactory,BeerDetails,AuthService,beers,categories,styles,breweries,users){
	$scope.beers = beers
	$scope.categories = categories
	$scope.styles = styles
	$scope.breweries = breweries
	$scope.users = users

	$scope.editAction = true
	$scope.addAction = false

	$scope.adminAction = {
		edit: true,
		add: false,
		order: false,
		user: false
	}

	$scope.currentAction = 'edit'

	$scope.selectedBeerId = undefined
	$scope.selectedBeer = undefined
	$scope.newBeer = undefined

	$scope.success = undefined
	$scope.error = undefined

	$scope.toggleAction = function (action){
		for(var key in $scope.adminAction){
			$scope.adminAction[key] = false
		}
		$scope.adminAction[action] = true
		$scope.currentAction = action
	}

	$scope.getBeer = function (){
		DisplayBeerFactory.getBeerById($scope.selectedBeerId)
		.then(function (beer){
			$scope.selectedBeer = beer[0]
		})
	}

	$scope.createBeer = function (beer){
		debugger
		var retBeer = {}
		if(beer._id) retBeer._id = beer._id
		
		if(beer.cat_id != -1 && beer.cat_oid._id) retBeer.cat_oid = beer.cat_oid._id
		else if(beer.cat_oid) retBeer.cat_oid = beer.cat_oid
		
		if(beer.name) retBeer.name = beer.name
		if(beer.descript) retBeer.descript = beer.descript
		if(beer.tags) retBeer.tags = beer.tags
		
		if(beer.style_id != -1 && beer.style_oid._id) retBeer.style_oid = beer.style_oid._id 
		else if(beer.style_oid) retBeer.style_oid = beer.style_oid
		
		if(beer.brewery_id != -1&&beer.brewery_oid._id) retBeer.brewery_oid = beer.brewery_oid._id
		else if(beer.brewery_oid) retBeer.brewery_oid = beer.brewery_oid

		if(beer.abv) retBeer.abv = beer.abv
		if(beer.stock) retBeer.stock = beer.stock
		if(beer.price) retBeer.price = beer.price

		return retBeer
	}

	$scope.addBeer = function(){
		var newBeer = $scope.createBeer($scope.newBeer)
		$scope.upsertBeer(newBeer,'add')
	}

	$scope.updateBeer = function(){
		var newBeer = $scope.createBeer($scope.selectedBeer)
		$scope.upsertBeer(newBeer,'update')
	}

	$scope.upsertBeer = function (newBeer,action){
		
		BeerDetails.upsertBeer(newBeer,action)
		.then(function(result){
			debugger
			var m = ''
			if($scope.adminAction.edit) m = 'updated'
			if($scope.adminAction.add)	m = 'added'


			if(result.message === 'success') {
				$scope.success = "Beer successfully " + m
				$scope.beers.push(result.beer)
				if(action==='add') $scope.newBeer = undefined
				if(action==='edit') $scope.selectedBeer = undefined
			}

			if(result.message === 'error') $scope.error = "There was an error saving the update"

			setTimeout(function(){
				$scope.success = undefined
				$scope.error = undefined
			},2000)
		})
	}
})