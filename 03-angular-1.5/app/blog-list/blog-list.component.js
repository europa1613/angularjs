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

            var blogItems = [
                { title: 'Game of Thrones', id: 1, description: 'This is a Book' },
                { title: 'The Lord of the Rings', id: 2, description: 'This is a Book' },
                { title: 'Sherlock Holmes', id: 3, description: 'This is a Book' },
                { title: 'Harry Potter', id: 4, description: 'This is a Book' },
                { title: 'The Dark Tower', id: 5, description: 'This is a Book' },
                { title: 'Alien: Covenant', id: 6, description: 'This is a Book' }
            ];


            this.items = blogItems;

            this.title = 'Blog Title';
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
