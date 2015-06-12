app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, $state) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;
        //grabs the cart session thats stored on client and send it up to auth factory
        var getCartSession = sessionStorage.getItem("cartSession");
        var cartObj = JSON.parse(getCartSession);
        console.log('While logging on this cart should be sent', cartObj)


        AuthService.login(loginInfo, cartObj).then(function () {
            $state.go('home');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});