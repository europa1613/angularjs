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
            $routeConfig: [
                { path: '/overview', component: 'movieOverview', name: 'Overview' },
                { path: '/cast', component: 'movieCast', name: 'Cast' },
                { path: '/director', component: 'movieDirector', name: 'Director' },
            ],
            controller: function() {
                var model = this;

                model.$routerOnActivate = function(nextRoute, prevRoute) {
                    console.log(nextRoute);
                    console.log(prevRoute);
                    model.id = nextRoute.params.id;
                };
            },
            controllerAs: 'model'
        })
        .component('movieOverview', {
            template: '<h3>This is the overview of the movie.</h3>'
        })
        .component('movieCast', {
            template: '<h3>This is the cast of the movie.</h3>'
        })
        .component('movieDirector', {
            template: '<h3>This is the director of the movie.</h3>'
        });
}());
