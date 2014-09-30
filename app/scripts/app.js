'use strict';

/**
 * @ngdoc overview
 * @name invisionappFrontEndChallengeApp
 * @description
 * # invisionappFrontEndChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('invisionappFrontEndChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
