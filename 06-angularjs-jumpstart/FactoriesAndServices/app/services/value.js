
//Value cannot be injected into config()
angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});


//constant CAN be injected into config()

/*angular.module('customersApp').constant('appSettings', {
    title: 'Customers Application',
    version: '1.0'
})*/
