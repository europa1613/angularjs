angular.module('myApp')
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/home', {
                template: '<blog-list></blog-list>'
            })
            .when('/about', {
            	template: '<about-us></about-us>', 
            	//templateUrl also works but controller must be identified here and in about.html
            	//controller: 'AboutController'
            })
            .when('/blog/:id', {
                template: '<blog-detail></blog-detail>'
            })
            .otherwise({
            	redirectTo: '/home'
            });

        $locationProvider.html5Mode(false);
    });
