(function() {
    'use strict';
    var module = angular.module('psMovies');

    function fecthMovies($http) {
        return $http.get('/movies.json')
            .then(function(response) {
                return response.data;
            });
    };

    function controller($http) {
        var model = this;
        model.movies = [];

        model.$onInit = function() {
            fecthMovies($http).then(function(movies) {
                model.movies = movies;
            });
        };

        model.upRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };

        model.goTo = function(movieId) {
            model.$router.navigate(['Details', {id: movieId}]);
        };
    };

    module.component('movieList', {
        templateUrl: '/ps-movies/movie-list.component.html',
        controllerAs: 'model',
        controller: controller,
        bindings: {
            '$router': '<'
        }
    });
}());
