(function() {
    'use strict';

    var module = angular.module('psMovies');

    module.component('movieRating', {
        templateUrl: 'ps-movies/movie-rating.component.html',
        bindings: {
            value: "<"
        },
        transclude: true,
        controllerAs: 'model',
        controller: function() {
            var model = this;

            model.$onInit = function() {
                model.entries = new Array(model.value);
                console.log(model.entries);
            };

            model.$onChanges = function(changeObj) {
                console.log(changeObj);
                model.entries = new Array(model.value);
            };
        }
    });
}());
