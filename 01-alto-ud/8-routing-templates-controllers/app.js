var angularApp = angular.module('angularApp', []);

angularApp.controller('MainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    $scope.name = 'Main';
    $log.warn($location.path());
}]);