(function() {
    "use strict";

    angular.module('psMovies', ['ngComponentRouter'])
        /*.config(function($routeProvider) {
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
        })*/
        .value('$routerRootComponent', 'movieApp')
        .component('appAbout', {
            template: 'This is about Movies'
        });

}());
