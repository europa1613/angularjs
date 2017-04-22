var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
        .when('/second/:param1', { //second' route will not work but /second/123 works
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
        /*
         * /main in otherwise will automatically set the route to /#/main 
         * localhost:8080 -> http://localhost:8080/#/main
         */
        .otherwise('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        });
});

angularApp.service('MainService', function() {
    var self = this;
    this.name = 'Arya';
    this.lastname = 'Stark';
    this.getFullName = function() {
        return self.name + ', ' + self.lastname;
    }
});

angularApp.controller('MainController', ['$scope', '$location', '$log', 'MainService', function($scope, $location, $log, mainService) {
    $scope.name = mainService.name;
    $scope.page = 'Main';
    $log.warn($location.path());
    $log.info(mainService.getFullName());

    $scope.$watch('name', function() {
        mainService.name = $scope.name;
    });

    $scope.person = {
        name: 'Arya, Stark',
        address: 'Winterfell'
    }
}]);

angularApp.controller('SecondController', ['$scope', '$location', '$log', '$routeParams', 'MainService', function($scope, $location, $log, $routeParams, mainService) {
    $scope.name = mainService.name;
    $log.warn($location.path());

    $scope.param1 = $routeParams.param1;

    $scope.$watch('name', function() {
        mainService.name = $scope.name;
    });
}]);




angularApp.directive('searchResult', function() {
    return {
        restrict: 'AECM', //A=Attribute, E=Element, AE=both(default), C=Class value, M=HTML Comment
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            /* @ = text binding: value passed directly thru interpolation {{}}: meaning, this translates to person-name attr in search-result directive 
             * and takes value as {{person.name}}, see main.html, 
             * and in searchresult.html, the value can be used as {{personName}}
             */
            personName: '@',
            personAddress: '@'
        }
    }
});
