app.directive('cartitem', function(OrderFactory){
	return {
	        restrict: 'E',
	        scope: {
	        	beer: "="
	        },
	        templateUrl: 'js/common/directives/displayOrder/displayOrder.html',
	        link: function (scope) {
	        	scope.editing = false
	        	scope.cartObj = JSON.parse(localStorage.getItem('cartSession'))
	        	scope.kill = function(beer){
	        		for (var i = 0; i < scope.cartObj.length; i++){
	        			if (beer._id === scope.cartObj[i]._id) {
	        				scope.cartObj.splice(i,1)
	        				localStorage.setItem('cartSession',JSON.stringify(scope.cartObj))
	        			}
	        		}
	        		OrderFactory.updateOrder(cartObj)
	        	}
	        	scope.submit = function(beer){
	        		scope.beer.quantity = scope.quantity
	        		for (var i = 0; i < scope.cartObj.length; i++){
	        			if (beer._id === scope.cartObj[i]._id) {
	        				scope.cartObj[i].quantity = scope.quantity
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
