(function() {
    "use strict";

    angular.module('psMovies', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/list', {
                    template: '<movie-list></movie-list>'
                })
                .when('/about', {
                    template: '<app-about></app-about>'
                })
                .otherwise({
                    redirectTo: '/list'
                })
        })
        .component('appAbout', {
            template: 'This is about Movies'
        });

}());
