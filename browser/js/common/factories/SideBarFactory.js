app.factory('SideBarFactory', function($http){

	return {

		getBeerCategories: function(){

			return $http.get('/categories').then(function(results)
				{
					return results.data
				})
		}
	}
})