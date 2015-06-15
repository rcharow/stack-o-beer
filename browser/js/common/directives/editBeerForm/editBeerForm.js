app.directive('editbeerform',function(){
	return {
		restrict: 'E',
	        scope: {
	        	editBeer: "=beer",
	        	categories: "=cat",
	        	styles: "=style",
	        	breweries: "=brew",
	        	update: "&"

	        },
	        templateUrl: 'js/common/directives/editBeerForm/editBeerForm.html',
	        link: function (scope){
	        }
    }
})