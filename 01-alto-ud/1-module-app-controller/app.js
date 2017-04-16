// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function($scope) {
	console.log($scope);
	console.log('hello');

	$scope.name = 'John, Snow';
	$scope.occupation = 'Crow';
	$scope.getName = function() {
		return 'John, Snow';
	}
});
