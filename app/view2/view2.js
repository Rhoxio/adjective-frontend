'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'BattleController'
  });
}])

.controller('BattleController', ['$scope', '$http', '$q', function($scope, $http, $q) {

	var characters = []
	var enemies = []

	var getCharacterData = function(){
		$http.get('http://localhost:9393/characters').then(function(response){
			characters.push(response.data)
			console.log(characters)
			return response
		})
	}

	var getEnemyData = function(){
		$http.get('http://localhost:9393/enemies').then(function(response){
			enemies.push(response.data)
			console.log(enemies)
			return response
		})
	}

	var setUpBattleEnvironment = function(){
		getEnemyData();
		getCharacterData();

		$('.thing').on('click', function(){
			$('.thing').css('background-color', 'red')
		})
	}

	setUpBattleEnvironment()


}]);