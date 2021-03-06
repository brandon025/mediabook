'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
//angular.module('clientApp')
//  .controller('MoviesCtrl', function () {
//    this.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });

angular.module('clientApp')
  .controller('MoviesCtrl', function (
    $scope, Movie) {
    $scope.search = '';
    $scope.movies = Movie.getList().$object; //array of movies
    
    $scope.filterVideos = function(movie){
        $scope.search = movie;
    };
  });