app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, SearchBarFactory, $modal, Review) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home.main' },
                { label: 'User', state: 'user', auth:true },
                { label: 'Members Only', state: 'membersOnly', auth: true }
            ];

            
            scope.user = null;

            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home.main');
                });
            };
            scope.goToCheckout = function(){
                $state.go('checkout')
            }

            scope.updateCart = function(){
                // getCartSession = localStorage.getItem("cartSession");
                scope.cartObj = JSON.parse(localStorage.getItem("cartSession"));
                scope.total =0;
                scope.cartObj.forEach(function(item){
                    scope.total += (item.price *item.quantity)
                })
                console.log('cart from factory is',scope.cartObj)
            }

            scope.getBeer = function(val){
                    
                    //ensures dynamic search stops when full phrase is entered
                    val = '"' + val.replace(/"/g, '') + '"'
                    return SearchBarFactory.searchForBeer(val).then(function (response){
                        return response.map(function(beer){ 
                            scope.currentBeer= beer;
                            return beer})
                    })
            }

            scope.beerInfo = function(){
                console.log('BEER INFO', scope.currentBeer)
                var modalProduct = $modal.open({
                    animation: scope.animationEnabled,
                    templateUrl: '/js/common/templates/productDetails.html',
                    controller: 'ProductController',
                    size: 'lg',
                    resolve: { 
                        beer:function(){return scope.currentBeer},
                        reviews: function () {
                            return Review.getReviewsByBeerId(scope.currentBeer._id)
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

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                });
            };

            var removeUser = function () {
                scope.user = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});