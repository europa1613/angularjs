var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
});

angularApp.controller('MainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    $scope.name = 'Home';
    $log.warn($location.path());
}]);

angularApp.controller('SecondController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    $scope.name = 'Second';
    $log.warn($location.path());
}]);
