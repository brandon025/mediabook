'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ImageAddCtrl', function ($scope, Image, $location) {
      $scope.image = {};
      $scope.saveImage = function() {
          //promises
        Image.post($scope.image).then(function() {
    
          $location.path('/images');
        });
      };
    });
