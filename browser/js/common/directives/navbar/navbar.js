app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            scope.items = [
                { label: 'Home', state: 'home.main' },
                { label: 'User', state: 'user', auth: true }
                
            ];

            scope.adminItems = [
                { label: 'Admin', state: 'admin'}
            ]


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