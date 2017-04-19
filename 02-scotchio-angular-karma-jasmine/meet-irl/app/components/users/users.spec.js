describe('UsersController', function() {
    var $controller, UsersController;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));

    beforeEach(inject(function(_$controller_) {
    	$controller = _$controller_;
    	UsersController = $controller('UsersController', {});
    }));

    it('should be defined', function() {
    	expect(UsersController).toBeDefined();
    });
});
