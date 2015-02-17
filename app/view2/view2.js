'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'BattleController'
  });
}])

.controller('BattleController', ['$scope', '$http', function($scope, $http) {

	

}]);