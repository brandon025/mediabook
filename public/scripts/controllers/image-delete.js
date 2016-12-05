'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ImageDeleteCtrl', function (
      $scope,
      $routeParams,
      Image,
      $location
    ) {
      $scope.image = Image.one($routeParams.id).get().$object;
      $scope.deleteImage = function() {
        $scope.image.remove().then(function() {
            //redirect to movies after deleting
          $location.path('/images');
        });
      };
      $scope.back = function() {
          //goes back to the movie you were on
        $location.path('/images');
      };
    });
