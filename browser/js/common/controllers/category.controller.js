app.controller('BrowseController',function($scope, SideBarFactory){
		console.log("IN SIDEBAR CONTROLLER");
	
		console.log('SideBarFactory', SideBarFactory)
		
		$scope.categories = "Hey";
		SideBarFactory.getBeerCategories().then(function(categories){
			console.log('In categoryController', categories);
		})
	

})