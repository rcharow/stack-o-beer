app.controller('SideBarController',function($scope, SideBarFactory){

	$scope.categories = [];
	$scope.getAllCategories = function(){
		SideBarFactory.getBeerCategories().then(function(categories){
			console.log('In categoryController', categories);
			$scope.categories = categories
		})
	}

})