app.factory('UpdateCart', function($http){

	return{
		insertItem: function(item, user){

			var query = {};
			console.log('ITEM IS', item)
			console.log('USER IS', user)
			query.item = item;
			query.user = user;
			return $http.put('/api/user', {
				user: user, item: item
			}).then(function(results){
				return results
			})


		}
	}
})