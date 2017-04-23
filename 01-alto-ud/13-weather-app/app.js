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

app.service('weatherService', ['$resource', function($resource) {
    var self = this;
    self.city = 'New York';
    self.APPID = '792c84bbd2ea68787c31341c2b182080';

    //http://api.openweathermap.org/data/2.5/forecast/daily?APPID=YOURAPIKEY
    //http://api.openweathermap.org/data/2.5/forecast/daily?APPID=792c84bbd2ea68787c31341c2b182080
    //http://api.openweathermap.org/data/2.5/forecast/daily?q=London&APPID=792c84bbd2ea68787c31341c2b182080&cnt=2

    self.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
        callback: 'JSON_CALLBACK'
    }, {
        get: {
            method: 'JSONP'
        }
    });

    self.getWeather = function(city, days) {
        return self.weatherAPI.get({
            q: city,
            cnt: days,
            APPID: self.APPID
        });
    }
}]);

app.controller('HomeController', ['$scope', '$location', 'weatherService', function($scope, $location, weatherService) {
    $scope.city = weatherService.city;

    $scope.$watch('city', function() {
        weatherService.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path('/forecast');
    }

}]);

app.controller('ForecastController', ['$scope', '$routeParams', 'weatherService', function($scope, $routeParams, weatherService) {
    $scope.city = weatherService.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

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
