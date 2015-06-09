app.factory('SideBarFactory', function($http){

	return {

		getBeerCategories: function(){
			console.log("In Factory");
			return $http.get('/categories').then(function(results)
				{
					return results.data
				})
		}
	}
})