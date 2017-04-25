angular.module('myApp', [])
	.component('helloWorld', {
		template: 'Hello {{$ctrl.name}}',
		bindings: {
			name: '@'
		}
	});