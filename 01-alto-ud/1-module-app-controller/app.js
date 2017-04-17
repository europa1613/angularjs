// MODULE
var angularApp = angular.module('angularApp', ['ngMessages']);

// CONTROLLERS
angularApp.controller('mainController', function($scope, $log, $filter) {
    console.log($log);
    $log.log('log');
    $log.debug('debug');
    $log.info('info');
    $log.warn('warn');
    $log.error('error');

    $scope.name = 'John, Snow';
    $scope.nameCaps = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.nameCaps);


});

/* *********************************
 * Minification Problem
 * *********************************
 */
angularApp.controller('ForMinifierController', function($log, $scope) {
    $log.info($scope);
});

/* $log and $scope are renamed to n and o, 
 * which makes them not inject by angular
 * Finally failing the function
 */
//angularApp.controller("ForMinifierController", function(n, o) { n.info(o) });

/* *********************************
 * Minification Problem
 * *********************************
 */

/*
 * To Avoid above problem,  
 * Angular provide different syntax to setup controllers 
 * NOTE: ORDER of injects and fn parameters MATTER.
 */

angularApp.controller('ForMinifierController', ["$log", '$scope', function($log, $scope) {
    $log.info($scope);
}]);

angularApp.controller("ForMinifierController", ["$log", "$scope", function(o, n) { o.info(n) }]);
