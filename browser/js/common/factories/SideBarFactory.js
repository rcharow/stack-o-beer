app.factory('SideBarFactory', function($http){

	return {

		getBeerCategories: function(){

			return $http.get('/api/beer/categories').then(function(results)
				{
					return results.data
				})
		}
	}
})