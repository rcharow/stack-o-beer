app.factory('signUpFactory', function($http){

    return {

        signup: function(info){
            return $http.post('/signup',info).then(function(results)
            {
                return results.data
            })

        }
    }
})