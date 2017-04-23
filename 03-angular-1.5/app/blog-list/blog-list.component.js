angular.module('blogList')
    /*Component is a self contained module, with template and controller */
    .component('blogList', {
        //template: '<div><h1> {{title}} </h1><button ng-click="click()">Click me</button></div>',
        templateUrl: 'blog-list/blog-list.html',
        controller: function($scope) {
            console.log('Hello Component!');
            $scope.title = 'Hi there! Component Here!';
            $scope.clicks = 0;
            $scope.click = function() {
                console.log('clicked');
                $scope.clicks += 1;
                $scope.title = 'Clicked ' + $scope.clicks + ' times!';
            }

            this.title = 'This title is from $ctrl object!';
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
