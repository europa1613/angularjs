var angularApp = angular.module('angularApp', ['ngMessages']);

angularApp.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'John, Snow';
    $timeout(function() {
        $scope.name = 'Arya, Stark';
    }, 5000);

    $scope.occupation = '';
    $timeout(function() {
    	$scope.occupation = 'A girl has no face';
    }, 5000);

}]);
