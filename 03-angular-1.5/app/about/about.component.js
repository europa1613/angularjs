angular.module('about')
	.component('aboutUs', {
		templateUrl: 'about/about.html',
		controller: function($scope) {
			console.log('Hello About!')
			this.title = 'About Us';
			this.content = 'This is Us. Everyone!!';
		},
		//controllerAs: 'AboutController'
	});