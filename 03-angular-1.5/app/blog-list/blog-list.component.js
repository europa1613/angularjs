angular.module('blogList')
    .component('blogList', {
        template: '<div><h1> {{title}} </h1><button ng-click="click()">Click me</button></div>',
        controller: function($scope) {
            console.log('Hello Component!');
            $scope.title = 'Hi there! Component Here!';
            $scope.clicks = 0;
            $scope.click = function() {
                console.log('clicked');
                $scope.clicks += 1;
                $scope.title = 'Clicked ' + $scope.clicks + ' times!';
            }
        }
    });
/*.controller('BlogListController', function($scope) {
    console.log('Hello Controller!');
    $scope.title = 'Hi there!';
    $scope.clicks = 0;
    $scope.click = function() {
        console.log('clicked');
        $scope.clicks += 1;
        $scope.title = 'Clicked ' + $scope.clicks + ' times!';
    }
});*/
