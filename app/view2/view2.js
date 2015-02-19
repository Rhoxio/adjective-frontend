'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'BattleController'
  });
}])

.controller('BattleController', ['$scope', '$http', '$q', function($scope, $http, $q) {

	var getCharacterData = function(){
		// These are going to be designed to only pull in as many objects as they need to. 
		$http.get('http://localhost:9393/characters').success(function(data, status){
			$scope.characters = data
			initializeCharacters();
			$scope.switchTarget($scope.character1)
		}).error(function(err){
			console.log(err)
		})	
	}

	var getEnemyData = function(){
		// These are going to be designed to only pull in as many objects as they need to.
		$http.get('http://localhost:9393/enemies').success(function(data, status){
			$scope.enemies = data
			initializeEnemies()
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

	var setUpBattleEnvironment = function(){
		getCharacterData()
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



