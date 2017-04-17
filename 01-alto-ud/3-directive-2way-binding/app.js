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

    /*
     * if model value changed outside of angular context, 
     * angular will not know that the value changed
     */

    setTimeout(function() {
        $scope.$apply(function() {
            $scope.occupation = 'setTimeout Change';
            console.log('scope changed from setTimeout');
        });
    }, 3000);

}]);
