app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'signupCtrl'
    });

});

app.controller('signupCtrl', function ($scope, signUpFactory, $state) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendSignUp = function (info) {

        $scope.error = null;

        signUpFactory.signup(info).then(function () {
            $state.go('login');
        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});