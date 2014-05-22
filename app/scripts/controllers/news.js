'use strict';

angular.module('exempleApp')
    .controller('NewsCtrl', function ($scope, $http, $routeParams) {
        var getNews = function(){$http.get(NEWS_URL).success(function(data){
            $scope.news = data;
        })};
        getNews();
    });