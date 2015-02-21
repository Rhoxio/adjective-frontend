'use strict';

angular.module('myApp.party', ['ngRoute', 'angularFileUpload'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/party', {
    templateUrl: 'party/party.html',
    controller: 'PartyController'
  });
}])

.controller('PartyController', ['$scope', '$http', '$upload', function($scope, $http, $upload) {

	$scope.onFileSelect = function($files){
		for (var i = 0; i < $files.length; i++){
			var $file = $files[i];
			$upload.upload({
				url: 'http://localhost:9393/upload',
				file: $file,
				progress: function(e){}
			}).then(function(data, status){
				console.log(data)
				console.log("It worked?")
			})
		}
	}

}])



