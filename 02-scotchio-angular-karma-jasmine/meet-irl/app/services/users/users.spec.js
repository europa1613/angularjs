describe('Users factory', function() {
    var Users;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('dummy test, 2+2=4', function() {
        expect(2 + 2).toEqual(4);
    });

    // A simple test to verify the Users factory exists
    it('should be defined', function() {
        expect(Users).toBeDefined();
    });
});
