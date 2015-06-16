app.directive('cartitem', function(OrderFactory, $modal, Review, AuthService){
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
	        		OrderFactory.updateOrder(scope.cartObj)
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
	        	scope.goToBeer = function(beer){
                var modalProduct = $modal.open({
                    animation: scope.animationEnabled,
                    templateUrl: '/js/common/templates/productDetails.html',
                    controller: 'ProductController',
                    size: 'lg',
                    resolve: { 
                        beer:function(){return beer},
                        reviews: function () {
                            return Review.getReviewsByBeerId(beer._id)
                        },
                        user: function (AuthService){
                            return AuthService.getLoggedInUser()
                            .then(function (user){
                                return user
                            })
                        }
                    }
                })
            }
	        
	    }
    }
})
