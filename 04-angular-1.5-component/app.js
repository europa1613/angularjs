angular.module('myApp', [])
    .component('helloWorld', {
        templateUrl: 'templates/helloWorld.html',
        bindings: {
            name: '@'
        },
        controller: function() {
            this.title = 'King in the North!';
        },
        controllerAs: 'HelloCtrl'
    });


/* Access a parent component's scopes */
/*angular.module("myApp", [])
  .component("helloWorld",{
      template: "Hello {{$ctrl.name}}, I'm {{$ctrl.myName}}!",
      bindings: { name: '@' },
      require: {
        parent: '^parentComponent'
      },
      controller: function () {
       // use this.parent to access required Objects
       this.parent.foo();
      }
  });*/