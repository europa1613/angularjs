var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
        .when('/second/:param1', { //second' route will not work but /second/123 works
            templateUrl: 'pages/second.html',
            controller: 'SecondController'
        })
        /*
         * /main in otherwise will automatically set the route to /#/main 
         * localhost:8080 -> http://localhost:8080/#/main
         */
        .otherwise('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        });
});

angularApp.service('MainService', function() {
    var self = this;
    this.name = 'Arya';
    this.lastname = 'Stark';
    this.getFullName = function() {
        return self.name + ', ' + self.lastname;
    }
});

angularApp.controller('MainController', ['$scope', '$location', '$log', 'MainService', function($scope, $location, $log, mainService) {
    $scope.name = mainService.name;
    $scope.page = 'Main';
    $log.warn($location.path());
    $log.info(mainService.getFullName());

    $scope.$watch('name', function() {
        mainService.name = $scope.name;
    });

    $scope.person = {
        name: 'Arya, Stark',
        address: '555 Main St',
        city: 'Brooklyn',
        state: 'NC',
        zip: 1111
    };

    $scope.getFullAddr = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    };

    $scope.people = [{
        name: 'John, Snow',
        address: '555 Main St',
        city: 'Brooklyn',
        state: 'NC',
        zip: 1111
    }, {
        name: 'Rob, Stark',
        address: '555 Main St',
        city: 'Brooklyn',
        state: 'NC',
        zip: 1111
    }, {
        name: 'Rickon, Stark',
        address: '555 Main St',
        city: 'Brooklyn',
        state: 'NC',
        zip: 1111
    }, {
        name: 'Brandon, Stark',
        address: '555 Main St',
        city: 'Brooklyn',
        state: 'NC',
        zip: 1111
    }];

}]);

angularApp.controller('SecondController', ['$scope', '$location', '$log', '$routeParams', 'MainService', function($scope, $location, $log, $routeParams, mainService) {
    $scope.name = mainService.name;
    $log.warn($location.path());

    $scope.param1 = $routeParams.param1;

    $scope.$watch('name', function() {
        mainService.name = $scope.name;
    });
}]);



/* @ = text binding or one way binding: value passed directly thru interpolation {{}}: meaning, this translates to person-name attr in search-result directive 
 * and takes value as {{person.name}}, see main.html, 
 * and in searchresult.html, the value can be used as {{personName}}
 */
angularApp.directive('searchResult', function() {
    return {
        restrict: 'AECM', //A=Attribute, E=Element, AE=both(default), C=Class value, M=HTML Comment
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personName: '@',
            personAddress: '@'
        }
    }
});

/*
 * '=': 2-way binding, any changes will be reflected in the source
 */
angularApp.directive('searchResultTwo', function() {
    return {
        restrict: 'AECM', //A=Attribute, E=Element, AE=both(default), C=Class value, M=HTML Comment
        templateUrl: 'directives/searchresult2.html',
        replace: true,
        scope: {
            personObject: '='
        }
    }
});

/*
 * & - passing a method/function in directive's scope
 */
angularApp.directive('searchResultFn', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/searchResult3.html',
        replace: true,
        scope: {
            personObject: '=',
            fullAddress: '&'
        }
    }
});

/*
 * display people using custom directive and ng-repeat
 */
angularApp.directive('searchResultPeople', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/searchResult3.html',
        replace: true,
        scope: {
            personObject: '=',
            fullAddress: '&'
        },
        /*
         * compile method is called once
         * whole pre and post are called each time the directive is rendered
         * like in this case ng-repeat 
         */
        /*
         * compile: change the directive on the fly b4 it gets used 
         *      -> element.removeAttr('class') removes class attr for all directives.
         * pre: Angular uses when nested directives are used; not safe to use, so commented below
         * post: same as pre; but safer to use
         */
        compile: function(element, attrs) {
            console.log('Compiling...');
            console.log(element.html());
            //can gain access to the view of the directive
            //element.removeAttr('class');

            return {
                /*pre: function(scope, elements, attrs) {
                    console.log('Pre linking...');
                    console.log(scope);
                    console.log(elements);
                },*/

                post: function(scope, elements, attrs) {
                    console.log('Post linking...');
                    console.log(scope);
                    console.log(elements);
                    if (scope.personObject.name === 'Rob, Stark' || scope.personObject.name === 'Rickon, Stark') {
                        elements.addClass('list-group-item-danger');
                    } else {
                        elements.addClass('list-group-item-success');
                    }
                }
            }
        }
    }
});
