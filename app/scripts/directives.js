'use strict';
angular
  .module('exempleApp').directive('quoteDisplay',function(){
        return {
            scope : {
                quote: '='
            },
            restrict: 'AEC',
            templateUrl: 'views/quote.html'
        }
    })


.directive('adDisplay', function(){
        return {
            scope : {
                src: '='
            },
            restrict: 'AEC',
            templateUrl: 'views/ad.html'
        }

    });
