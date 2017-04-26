(function() {
    'use strict';
    angular.module('api.pokemon', [])
        .factory('Pokemon', function($http) {
            var Pokemon = {};

            var API_ENDPOINT = 'http://pokeapi.co/api/v2/pokemon/';

            Pokemon.findByName = function(name) {
                return $http.get(API_ENDPOINT + name)
                    .then(function(response) {
                        return response.data;
                    }).catch(function(response) {
                    	return response.data;
                    });
            };

            return Pokemon;
        });
})();
