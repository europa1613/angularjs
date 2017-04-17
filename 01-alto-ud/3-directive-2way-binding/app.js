var angularApp = angular.module('angularApp', ['ngMessages']);

angularApp.controller('MainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    $scope.name = 'John, Snow';
    $scope.occupation = '';
    $scope.occuCaps = function() {
        return $filter('uppercase')($scope.occupation);
    };

    $scope.$watch('occupation', function(newValue, oldValue) {
    	console.log('changed!');
    	console.log('oldValue: ', oldValue);
    	console.log('newValue: ', newValue);
    });

}]);
