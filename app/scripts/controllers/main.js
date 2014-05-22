'use strict';

angular.module('exempleApp')
    .controller('MainCtrl', function ($scope, $http) {
        var getNews = function(){$http.get(NEWS_URL).success(function(data){
            $scope.news = data;
        })};

        var getQuotes = function(){$http.get(QUOTES_URL).success(function (data) {
            $scope.quotes = data;
          })};

        getQuotes();
        getNews();

        $scope.postQuote = function () {
            $scope.newQuote.date = new Date();
            $http.post(QUOTES_URL, $scope.newQuote).success(function () {
                $scope.newQuote = {};
                $scope.success = true;
                getQuotes();
              });
          };
      });