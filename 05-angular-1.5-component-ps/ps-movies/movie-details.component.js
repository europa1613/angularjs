(function() {
    'use strict';

    angular.module('psMovies')
        .component('movieDetails', {
            templateUrl: 'ps-movies/movie-details.component.html',
            /*$canActivate: function($timeout) {
                return $timeout(function() {
                    return true;
                }, 3000);
            },*/
            controller: function() {
                var model = this;

                model.$routerOnActivate = function(nextRoute, prevRoute) {
                	console.log(nextRoute);
                	console.log(prevRoute);
                	model.id = nextRoute.params.id;
                };
            },
            controllerAs: 'model'
        });
}());
