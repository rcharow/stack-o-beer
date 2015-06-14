app.directive('addbeerform',function(){
	return {
		restrict: 'E',
	        scope: {
	        	editBeer: "=beer",
	        	categories: "=cat",
	        	styles: "=style",
	        	breweries: "=brew",
	        	update: "&"
	        	

	        },
	        templateUrl: 'js/common/directives/addBeerForm/addBeerForm.html',
	        link: function (scope){
	        	
	        }
    }
})