angular.module('blogList')
    .controller('BlogListController', function($scope) {
        console.log('Hello Controller!');
        $scope.title = 'Hi there!';
        $scope.clicks = 0;
        $scope.click = function() {
            console.log('clicked');
            $scope.clicks += 1;
            $scope.title = 'Clicked ' + $scope.clicks + ' times!';
        }
    });
