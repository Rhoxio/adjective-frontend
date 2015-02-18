'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'BattleController'
  });
}])

.controller('BattleController', ['$scope', '$http', '$q', function($scope, $http, $q) {

	var entities = []

	var getCharacterData = function(){
		$http.get('http://localhost:9393/characters').then(function(response){
			entities[0] = response.data
			$scope.allCharacters = response.data
			return response.data
		})
	}

	var getEnemyData = function(){
		$http.get('http://localhost:9393/enemies').then(function(response){
			entities[1] = response.data
			$scope.allEnemies = response.data
			return response.data
		})
	}

	var setUpBattleEnvironment = function(){
		getEnemyData();
		getCharacterData();

	}

	setUpBattleEnvironment()


}]);