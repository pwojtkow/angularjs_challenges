angular.module('app.component1').service('ChallengeCRUDService', function($http) {
  'use strict';

  return {
        deleteChallenge: function(challenge) {
            return $http({
                method: 'DELETE',
                url: 'http://localhost:8090/rest/challenge/delete?challenge_id=' + challenge.id
            }).then(function onSuccess() {
                alert('Challenge has been deleted');
            }, function onError() {
                alert('Error when try delete challenge');
            });
        },
        addChallenge: function(challenge) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8090/rest/challenge/addByLogin?sender_login=' + challenge.userSender.login + '&recipient_login=' + challenge.userRecipient.login
            }).then(function onSuccess() {
                alert('Challenge has been added');
            }, function onError() {
                alert('Error when try add challenge');
            });
        }
    };

});
