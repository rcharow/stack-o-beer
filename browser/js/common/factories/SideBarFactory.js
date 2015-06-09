app.factory('SideBarFactory', function($http){

	return {
		console.log('hi');

		getBeerCategories: function(){
			console.log("In Factory");
			return $http.get('api/categories').then(function(results)
				{   console.log(results);
					return results.data
				})
		}
	}
})