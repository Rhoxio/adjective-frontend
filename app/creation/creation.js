'use strict';

angular.module('myApp.creation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creation', {
    templateUrl: 'creation/creation.html',
    controller: 'CharacterController'
  });
}])

.controller('CharacterController', ['$scope', '$http', function($scope, $http) {

	$http.get('http://localhost:9393/characters').success(function(req, res){
		$scope.allCharacters = req
	}).
	error(function(err){
		console.log(err)
	})

	$scope.getCharacter = function(input){
		console.log("Requesting info for id: " + $scope.input)
		$http.get('http://localhost:9393/character/' + input).success(function(req, res){
			$scope.response = req
		}).
		error(function(err){
			$scope.response = err
		})
	}

	$scope.createCharacter = function(character){
		$http.post('http://localhost:9393/characters', character).
			success(function(){
				console.log(character)
				console.log("It worked!")
			}).
			error(function(err){
				console.log('fuck')
		})
	}

	$scope.createUser = function(user){
		$http.post('http://localhost:9393/users', user).
			success(function(){
				console.log(user)
				console.log("Created User: " + user.name)
			}).
			error(function(err){
				console.log(err)
				console.log('API call failed')
			})
	}

}]);