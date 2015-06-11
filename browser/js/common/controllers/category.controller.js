app.controller('MainController',function($scope, SideBarFactory){
		console.log("IN Main CONTROLLER");
	
		

		SideBarFactory.getBeerCategories().then(function(categories){

					$scope.categories = categories;

			console.log('In categoryController', categories);
		})
	

})