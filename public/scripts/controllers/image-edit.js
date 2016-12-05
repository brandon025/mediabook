'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ImageEditCtrl', function (
      $scope,
      $routeParams,
      Image,
      $location
    ) {
      $scope.editImage = true;
      $scope.image = {};
      Image.one($routeParams.id).get().then(function(image) {
        $scope.image = image;
        $scope.saveImage = function() {
          $scope.image.save().then(function() {
            $location.path('/images');
          });
        };
      });
    });
