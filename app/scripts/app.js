'use strict';
angular
  .module('exempleApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/quote/:id', {
            templateUrl:'views/main.html',
            controller:'QuoteCtrl'
        })
        .when('/news/:id', {
            templateUrl:'views/news.html',
            controller:'NewsCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
