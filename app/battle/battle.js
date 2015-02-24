'use strict';

angular.module('myApp.battle', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/battle', {
    templateUrl: 'battle/battle.html',
    controller: 'BattleController'
  });
}])

.controller('BattleController', ['$scope', '$http', '$q', function($scope, $http, $q) {

	var getCharacterData = function(usersCharacters){
		// These are going to be designed to only pull in as many objects as they need to.
		$http.get('http://localhost:9393/characters/'+usersCharacters).success(function(data, status){
			$scope.characters = data
			initializeCharacters();
		}).error(function(err){
			console.log(err)
		})
	}

	var getEnemyData = function(){
		// These are going to be designed to only pull in as many objects as they need to.
		$http.get('http://localhost:9393/enemies').success(function(data, status){
			$scope.enemies = data
			initializeEnemies();
		}).error(function(err){
			console.log(err)
		})	
	}

	var menuAnimation = function(trigger, element){
		
		var toggle = 'closed'

		$(trigger).on('click', function(){
			if(toggle == 'closed'){
				$(element).animate({
					opacity: 0.25,
					height: '50%'
			}, 500)
				toggle = 'open'
			} else if(toggle == 'open') {
				$(element).animate({
					opacity: 0.25,
					height: '5%'
			}, 500)
				toggle = 'closed'
			}
			
		})	
	}

	var bindDefaultEvents = function(){
		menuAnimation('.animation', '.animation');
	}

	var initializeCharacters = function(){
		$scope.character1 = $scope.characters[0]
		$scope.character2 = $scope.characters[1]
		$scope.character3 = $scope.characters[2]
		$scope.character4 = $scope.characters[3]
	}

	var initializeEnemies = function(){
		$scope.enemy1 = $scope.enemies[0]
		$scope.enemy2 = $scope.enemies[1]
		$scope.enemy3 = $scope.enemies[2]
		$scope.enemy4 = $scope.enemies[3]
	}

	var initializeCharacterPortraits = function(){

	}

	var setUpBattleEnvironment = function(){
		getCharacterData('1,2,3,4')
		getEnemyData()
		bindDefaultEvents();
	}

	$scope.switchTarget = function(newTarget){
		console.log(newTarget)
		$scope.currentTarget = newTarget
	}

	$scope.hurtSomething = function(entity){
		entity.current_hp -= 5
	}


setUpBattleEnvironment()

}])



