angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: 'blog-detail/blog-detail.html',
        controller: BlogDetailController
    });


function BlogDetailController($http, $routeParams, $scope, $location) {
    /* var blogItems = [
         { title: 'Game of Thrones', id: 1, description: 'This is a Book' },
         { title: 'The Lord of the Rings', id: 2, description: 'This is a Book' },
         { title: 'Sherlock Holmes', id: 3, description: 'This is a Book' },
         { title: 'Harry Potter', id: 4, description: 'This is a Book' },
         { title: 'The Dark Tower', id: 5, description: 'This is a Book' },
         { title: 'Alien: Covenant', id: 6, description: 'This is a Book' }
     ];*/
    var self = this;
    self.notFound = true;
    var blogItems = [];

    $http.get('/json/posts.json').then(successCallback, errorCallback);

    function successCallback(response) {
        console.log('response: ', response);
        blogItems = response.data;
        console.log(JSON.stringify(blogItems));

        angular.forEach(blogItems, function(post) {
            if (post.id === parseInt($routeParams.id, 10)) {
                self.post = post;
                self.notFound = false;
            }
        });

        if (self.notFound) {
            $location.path('/404');
        }
    }

    function errorCallback(response) {
        console.log('error response: ', response);
        $location.path('/404');
    }
}

BlogDetailController.$inject = ['$http', '$routeParams', '$scope', '$location'];
