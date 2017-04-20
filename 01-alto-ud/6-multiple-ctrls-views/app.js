angular.module('angularApp', [])
    .controller('FirstController', ['$scope', FirstController])
    .controller('SecondController', ['$scope', SecondController]);

function FirstController($scope) {
    $scope.name = 'First';
};

function SecondController($scope) {
    $scope.name = 'Second';
}
