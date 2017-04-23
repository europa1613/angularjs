var myApp = angular.module('myApp', []);

myApp.controller('parentController1', ['$scope', function($scope) {
	$scope.message = 'Parent 1 message.';
}]);

myApp.controller('childController1', ['$scope', function($scope) {
	$scope.message = 'Child 1 message.';
}]);

myApp.controller('parentController2', ['$scope', function($scope) {
	$scope.message = 'Parent 2 message.';
}]);

myApp.controller('childController2', ['$scope', function($scope) {
	$scope.message = 'Child 2 message.';
}]);