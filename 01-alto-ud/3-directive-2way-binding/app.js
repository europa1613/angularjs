var angularApp = angular.module('angularApp', ['ngMessages']);

angularApp.controller('MainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    $scope.name = 'John, Snow';
    $scope.occupation = '';
    $scope.occuCaps = function() {
        return $filter('uppercase')($scope.occupation);
    }
}]);
