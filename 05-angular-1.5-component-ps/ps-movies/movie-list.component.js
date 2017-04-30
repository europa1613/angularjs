(function() {
    'use strict';
    var module = angular.module('psMovies');

    module.component('movieList', {
    	templateUrl: '/ps-movies/movie-list.component.html', 
    	controller: function() {
    		this.message = 'Hello from Component Controller!'
    	}
    });
}());
