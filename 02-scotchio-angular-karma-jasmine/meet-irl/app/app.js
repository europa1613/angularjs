(function() {
    'use strict';
    angular.module('meetIrl', [
            'ui.router',
            'api.users',
            'api.pokemon',
            'components.users',
            'components.profile',
            'components.missingno'
        ])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/users');
        });
})();
