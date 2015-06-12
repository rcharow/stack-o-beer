
app.controller('ProductController', function($scope,$modalInstance,AuthService,Review,beer,reviews,user, UpdateCart){
	$scope.beer = beer
	$scope.quantity = 0
    $scope.beer.abv = Number(beer.abv.toFixed(2))
	$scope.isReadOnly = true
	$scope.user = user
	$scope.userRating = 0
	$scope.userComment = ""

	//ng show indicators
	$scope.visible = {
		review: false,
		detail: true,
		edit: false
	}
	
	$scope.reviews = reviews
	console.log("SCOPE REVIES", $scope.reviews)

	$scope.toggleVisible = function(view){
		for(var key in $scope.visible){
			$scope.visible[key] = false
		}
		$scope.visible[view] = true
		console.log(view)
	}

	$scope.submitReview = function (){
		Review.submitUserReview(user._id, beer._id,$scope.userRating,$scope.userComment)
	}
	$scope.ok = function () {
		$modalInstance.close($scope.selected.item)
	}

	$scope.plus = function(){
		if ($scope.beer.stock >$scope.quantity) $scope.quantity++
		else {
			$scope.error = "Sorry, we can't keep up."
		}
	}
	
	$scope.minus = function(){
		if ($scope.quantity) $scope.quantity--
	}
	
	$scope.addToCart = function(thisBeer){
		cartArray.push(thisBeer);
		var jsonStr = JSON.stringify(cartArray);
		localStorage.setItem("cartSession", jsonStr);
		console.log(jsonStr);

		if (user)
			{	
				var getCartSession = localStorage.getItem("cartSession");
				var cartObj = JSON.parse(getCartSession);
				UpdateCart.insertItem(cartObj,user).then(function(){
					console.log('inserted')
				})
		}
	}
})