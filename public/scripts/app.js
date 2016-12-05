'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    
    RestangularProvider.setBaseUrl(location.protocol + "//" + location.host);
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
      })
    
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl',
      })
      .when('/create/image', {
        templateUrl: 'views/image-add.html',
        controller: 'ImageAddCtrl',
      })
      .when('/image/:id', {
        templateUrl: 'views/image-view.html',
        controller: 'ImageViewCtrl',
      })
      .when('/image/:id/delete', {
        templateUrl: 'views/image-delete.html',
        controller: 'ImageDeleteCtrl',
      })
      .when('/image/:id/edit', {
        templateUrl: 'views/image-edit.html',
        controller: 'ImageEditCtrl',
      })
    
      .when('/deers', {
        templateUrl: 'views/deers.html',
        controller: 'DeersCtrl',
      })
      .when('/threeprac',{
        templateUrl: 'views/threeprac.html',
        controller: 'ThreepracCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })

  .factory('ImageRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Image', function(ImageRestangular) {
    return ImageRestangular.service('image');
  })
  

  .directive('youtube', function(){
    return {
    restrict: 'E',
        scope: {
          src: '='
        },
        templateUrl: 'views/youtube.html'
      };
    })

    //nontrusted urls; youtube
    //take that url and trust it as a trusted resource
   .filter('trusted', function ($sce) {
      return function(url) {
        var url = url.replace("watch?v=", "v/");
        return $sce.trustAsResourceUrl(url);
      };
    });

