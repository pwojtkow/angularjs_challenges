angular.module('app.main').factory('challengesFactory', function($http) {
    'use strict';

    var factory = {
        challenges: []
    };

    factory.getChallenges = function() {
        $http.get('http://localhost:8090/rest/challenge/all').then(function(response) {
            angular.copy(response.data, factory.challenges);
        });
    };

    return factory;
});
