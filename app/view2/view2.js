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

		var toggle = 'closed'

		$('.animation').on('click', function(){
			if(toggle == 'closed'){
				$('.animation').animate({
					opacity: 0.25,
					height: '50%'
			}, 500)
				toggle = 'open'
			} else if(toggle == 'open') {
				$('.animation').animate({
					opacity: 0.25,
					height: '5%'
			}, 500)
				toggle = 'closed'
			}
			
		})	
	

	}

	var setUpBattleEnvironment = function(){
		getCharacterData();
		getEnemyData();
		bindDefaultEvents();
	}



	setUpBattleEnvironment()


}]);