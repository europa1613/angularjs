var angularApp = angular.module('angularApp', ['ngMessages']);

angularApp.controller('MainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {
    $scope.name = 'John, Snow';
    $scope.occupation = '';
    $scope.occuCaps = function() {
        return $filter('uppercase')($scope.occupation);
    };

    $scope.limitChars = 5;

    $scope.rules = [{
        ruleName: 'You must comply with all the rules.'
    }, {
        ruleName: 'You must comply with all the rules.'
    }, {
        ruleName: 'You must comply with all the rules.'
    }];

    /*$scope.$watch('occupation', function(newValue, oldValue) {
        console.log('changed!');
        console.log('oldValue: ', oldValue);
        console.log('newValue: ', newValue);
    });*/

    /*
     * if model value changed outside of angular context, 
     * angular will not know that the value changed,
     * ELSE USE $timeout
     */

    /*setTimeout(function() {
        $scope.$apply(function() {
            $scope.occupation = 'setTimeout Change';
            console.log('scope changed from setTimeout');
        });
    }, 3000);*/

}]);
