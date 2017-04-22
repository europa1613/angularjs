(function() {
    'use strict';
    angular.module('meetIrl', ['ui.router', 'api.users', 'components.users'])
        .config(function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/users');
        });
})();
