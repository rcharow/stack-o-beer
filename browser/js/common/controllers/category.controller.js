app.controller('SideBarController',function($scope, SideBarFactory){
	console.log('in controller');
	$scope.getAllCategories = function(){
		console.log('Hi');
		SideBarFactory.getBeerCategories().then(function(categories){
			console.log('In categoryController', categories);
			$scope.categories = categories
		})
	}
	$scope.getAllCategories();
})