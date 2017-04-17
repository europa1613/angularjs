// MODULE
var angularApp = angular.module('angularApp', []);

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
