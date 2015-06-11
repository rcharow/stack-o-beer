app.controller('MainController',function($scope, SideBarFactory){
		console.log("IN Main CONTROLLER");
	
		

		SideBarFactory.getBeerCategories().then(function(categories){

					$scope.categories = categories;

			console.log('In categoryController', categories);
		})

		$scope.goToCategory= function(categoryID){
			DisplayBeerFactory.getTypeBeer(categoryID).then(function(beers){

				$scope.beers= beers
				return
			})
		}
})