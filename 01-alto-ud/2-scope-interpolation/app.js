var angularApp = angular.module('angularApp', ['ngMessages']);

angularApp.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'John, Snow';
    $timeout(function() {
        $scope.name = 'Arya, Stark';
    }, 3000);
}]);
