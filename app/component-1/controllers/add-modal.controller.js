angular.module('app.component1').controller('AddModalController', function($scope, $modalInstance, $http, ChallengeCRUDService) {
    'use strict';

    $scope.data = {
        challengeToAdd: {
            status: '',
            sender: '',
            recipient: ''
        },
        header: 'Add challenge',
        buttonName: 'Add',
        alertMessage: 'All fields must be set!'
    };

    $scope.cancel = function() {
        $modalInstance.close();
    };

    $scope.change = function() {
        $scope.data.challengeToAdd.userSender = angular.copy($scope.data.selectedChallenge.userSender);
        $scope.data.challengeToAdd.userRecipient = angular.copy($scope.data.selectedChallenge.userRecipient);

        ChallengeCRUDService.addChallenge($scope.data.challengeToAdd);
        $modalInstance.close();
    };

});
