describe('movie-list.component', function() {
    var movieList;

    beforeEach(module('psMovies'));

    beforeEach(inject(function($componentController) {
    	movieList = $componentController('movieList', {
    		$scope: {}
    	});
    }));

    it('should be defined', function() {
        expect(movieList).toBeDefined();
        expect(movieList.$onInit).toBeDefined();
    });
});
