angular.module('myApp', [])
    .component('helloWorld', {
        template: '{{$ctrl.name}}, The {{$ctrl.title}} ',
        bindings: {
            name: '@'
        },
        controller: function() {
            this.title = 'King in the North!';
        }
    });
