app.controller('MainController',function($scope, $modal, SideBarFactory, DisplayBeerFactory, UpdateCart, AuthService){
		console.log("IN Main CONTROLLER");
		
		var cart = [];
        if (AuthService.isAuthenticated()) $scope.cart = $scope.user.cart

		SideBarFactory.getBeerCategories().then(function(categories){

			$scope.categories = categories;

			if(!$scope.beers){
				$scope.goToCategory($scope.categories[0]._id)
			}

			console.log('In categoryController', categories);
		})

		$scope.goToCategory= function(categoryID){
			DisplayBeerFactory.getBeerByCategory(categoryID).then(function(beers){

				$scope.beers= beers
				return
			})
		}




		$scope.displayBeer = function (beer){
				var modalProduct = $modal.open({
					animation: $scope.animationEnabled,
					templateUrl: '/js/common/templates/productDetails.html',
					controller: 'ProductController',
					size: 'lg',
					resolve: { 
						beer:function(){return beer}
					}
				})
			}




		var loggedInUser;

		AuthService.getLoggedInUser().then(function (user){

			if(user)
				{	console.log('YOOOOOOOOOO is' , user)
					loggedInUser= user;
					
				}

		})





		
		$scope.buyBeer= function(i){
			var stuff = {
				item: 'Hey',
				price: 2,
				qty: 3
			}

			cart.push(stuff);
			var jsonStr = JSON.stringify(cart);

			sessionStorage.setItem("test", jsonStr);

			var item = sessionStorage.getItem("test");
			console.log(item)

			if (loggedInUser)
				{

					var itemObj = JSON.parse(item);
					console.log('Itemobj is', itemObj);
					UpdateCart.insertItem(itemObj,loggedInUser).then(function(){
						console.log('inserted')
					})
			}

			else
			{
				var guest = sessionStorage.getItem("test");
				console.log(guest);
			}
			

		}
})