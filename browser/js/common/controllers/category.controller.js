app.controller('BrowseController',function($scope, SideBarFactory, DisplayBeerFactory){
	
		
		SideBarFactory.getBeerCategories().then(function(categories){
					$scope.categories = categories;

		})
	
		$scope.goToCategory= function(categoryID){
			DisplayBeerFactory.getTypeBeer(categoryID).then(function(beers){

				$scope.beers= beers
				return
			})
		}
})