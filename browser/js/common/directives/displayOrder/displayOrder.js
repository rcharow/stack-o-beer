app.directive('cartitem', function(){
	return {
	        restrict: 'E',
	        scope: {
	        	beer: "="
	        },
	        templateUrl: 'js/common/directives/displayOrder/displayOrder.html',
	        link: function (scope) {
	        	scope.editing = false
	        	scope.edit = function(item){

	        	}
	        	scope.kill = function(item){

	        	}
	        	scope.submit = function(beer){
	        		scope.beer.quantity = scope.quantity
	        		scope.cartObj = JSON.parse(localStorage.getItem('cartSession'))
	        		for (var i = 0; i < scope.cartObj.length; i++){
	        			if (beer.name === scope.cartObj[i].name) {
	        				console.log(scope.cartObj[i].quantity)
	        				scope.cartObj[i].quantity = scope.quantity
	        				console.log(scope.cartObj[i].quantity)
	        				localStorage.setItem('cartSession',JSON.stringify(scope.cartObj))
	        			}
	        		}
	        		scope.editing = false
	        	}
	        	scope.showEdit = function(){
	        		scope.editing = true
	        	}
	        }
	    }
	})
