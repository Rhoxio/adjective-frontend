'use strict';

		this.characters = 1

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.creation',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/creation'});
}]);
