var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/second/:param1', { //second' route will not work but /second/123 works
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
});

angularApp.controller('MainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    $scope.name = 'Home';
    $log.warn($location.path());
}]);

angularApp.controller('SecondController', ['$scope', '$location', '$log', '$routeParams', function($scope, $location, $log, $routeParams) {
    $scope.name = 'Second';
    $log.warn($location.path());
    $scope.param1 = $routeParams.param1;
}]);
