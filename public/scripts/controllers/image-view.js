'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('ImageViewCtrl', function (
      $scope,
      $routeParams,
      Image
    ) {
      $scope.viewImage = true;
      $scope.image = Image.one($routeParams.id).get().$object;
    });
