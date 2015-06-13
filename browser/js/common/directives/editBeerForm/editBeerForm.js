app.directive('editbeerform',function(){
	return {
		restrict: 'E',
	        scope: {},
	        templateUrl: 'js/common/directives/editBeerForm/editBeerForm.html',
	        link: function (scope){
	        	scope.upsertBeer = function (){
	        		console.log('upsertBeer!')
	        	}
	        }
    }
})