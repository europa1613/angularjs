// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function($scope) {
    console.log($scope);
    console.log('hello');

    $scope.name = 'John, Snow';
    $scope.occupation = 'Crow';
    $scope.getName = function() {
        return 'John, Snow';
    }
});

function add(a, b, $scope) {
    return a + b;
}
console.log(add.toString());

console.log(angular.injector().annotate(add)); // ["a", "b", "$scope"]
