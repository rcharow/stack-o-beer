app.controller('MainController',function($scope, SideBarFactory, DisplayBeerFactory, UpdateCart, AuthService){
		console.log("IN Main CONTROLLER");
		
		var cart = [];

		SideBarFactory.getBeerCategories().then(function(categories){

					$scope.categories = categories;

			console.log('In categoryController', categories);
		})

		$scope.goToCategory= function(categoryID){
			DisplayBeerFactory.getTypeBeer(categoryID).then(function(beers){

				$scope.beers= beers
				return
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