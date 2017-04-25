angular.module('myApp', [])
    .component('helloWorld', {
        template: '{{HelloCtrl.name}}, The {{HelloCtrl.title}} ',
        bindings: {
            name: '@'
        },
        controller: function() {
            this.title = 'King in the North!';
        },
        controllerAs: 'HelloCtrl'
    });
