angular.module('app.component1').controller('ChallengesController', function($scope, $http, $modal, challengesFactory) {
'use strict';

$scope.data = {
  challenges: challengesFactory.challenges
};

$scope.selectRow = function(index) {
      $scope.selectedRowIndex = index;
  };

  $scope.add = function() {
      $modal.open({
          templateUrl: '/component-1/modal-dialog/modal-dialog-add.tpl.html',
          controller: 'AddModalController',
          size: 'lg'
      });
  };

  $scope.delete = function() {
      $modal.open({
          templateUrl: '/component-1/modal-dialog/modal-dialog-delete.tpl.html',
          controller: 'DeleteModalController',
          size: 'lg',
          resolve: {
              selectedChallenge: function() {
                  return $scope.data.challenges[$scope.selectedRowIndex];
              }
          }
      });
  };
});
