angular.module('app.component2').controller('FilterController', function($scope, $http, challengesFactory) {
    'use strict';

    $scope.data = {
        challenges: challengesFactory.challenges,
        sortType: 'id',
        sortReverse: 'false',
        currentUrl: '#/component-2/dialog-b',
        dropdownButton: 'none'
    };

    $scope.filter = function(genre, buttonName) {
            $scope.search.genre = genre;
            $scope.data.dropdownButton = buttonName;
        };

});
