var myApp = angular.module('myApp', []);

myApp.controller('parentController1', ['$scope', function($scope) {
	var parent1vm = $scope.parent1vm = {};
	parent1vm.message = 'Parent 1 message.';
}]);

myApp.controller('childController1', ['$scope', function($scope) {
	var child1vm = $scope.child1vm = {};
	child1vm.message = 'Child 1 message.';
}]);

myApp.controller('parentController2', ['$scope', function($scope) {
	var parent2vm = $scope.parent2vm = {};
	parent2vm.message = 'Parent 2 message.';
}]);

myApp.controller('childController2', ['$scope', function($scope) {
	var child2vm = $scope.child2vm = {};
	child2vm.message = 'Child 2 message.';
}]);