app.directive('sidebar',function (SideBarFactory){
	console.log('SIDEBARR');
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/sidebar/sidebar.html'
	// 	link: function(scope){
	// 		console.log('HIII');
	// 		return SideBarFactory.getBeerCategories().then(function(results){
	// 			   console.log('results are', results)
	// 			   scope.categories = results;
	// 		})
	// 	}
	// }
})