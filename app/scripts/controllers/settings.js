'use strict';

/**
 * @ngdoc function
 * @name invisionappFrontEndChallengeApp.controller:SettingstCtrl
 * @description
 * # SettingstCtrl
 * Controller of the invisionappFrontEndChallengeApp
 */
angular.module('invisionappFrontEndChallengeApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.user = {
      name: 'jessica tuan',
      email: 'jessica@gmail.com',
      password: 'QWE'
    };
  });
