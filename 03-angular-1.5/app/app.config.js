angular.module('myApp')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                template: '<blog-list></blog-list>'
            })
            .when('/blog/1', {
                template: '<h1>Hi /blog/1</h1>'
            })

        $locationProvider.html5Mode(true);
    });
