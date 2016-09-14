angular.module('app.component1').controller('DeleteModalController', function($scope, $modalInstance, $http, selectedChallenge, ChallengeCRUDService) {
'use strict';
    $scope.data = {
        challengeToDelete: {},
        header: 'Delete challenge'
    };

    angular.copy(selectedChallenge, $scope.data.challengeToDelete);

    $scope.delete = function() {
        ChallengeCRUDService.deleteChallenge($scope.data.challengeToDelete);
        $modalInstance.close();
    };

    $scope.cancel = function() {
        $modalInstance.close();
    };
});
