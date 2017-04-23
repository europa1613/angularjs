var app = angular.module('weatherApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })
        .otherwise('/home', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        });
});

app.service('weatherService', function() {
    var self = this;
    self.city = 'New York';

    //http://api.openweathermap.org/data/2.5/forecast/daily?APPID=YOURAPIKEY
    //http://api.openweathermap.org/data/2.5/forecast/daily?APPID=792c84bbd2ea68787c31341c2b182080
    //http://api.openweathermap.org/data/2.5/forecast/daily?q=London&APPID=792c84bbd2ea68787c31341c2b182080&cnt=2
});

app.controller('HomeController', ['$scope', 'weatherService', function($scope, weatherService) {
    $scope.city = weatherService.city;

    $scope.$watch('city', function() {
        weatherService.city = $scope.city;
    });

}]);

app.controller('ForecastController', ['$scope', '$resource', '$routeParams', 'weatherService', function($scope, $resource, $routeParams, weatherService) {
    $scope.city = weatherService.city;
    $scope.days = $routeParams.days || 2;
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' } });

    $scope.APPID = '792c84bbd2ea68787c31341c2b182080';
    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        APPID: $scope.APPID
    });

    //console.log($scope.weatherResult);

    $scope.convertToF = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
}]);

app.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherObject: '=',
			convertDate: '&',
			convertF: '&',
			dateFormat: '@'
		}
	}
});
