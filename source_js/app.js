var app = angular.module('mp3',['ngRoute']);


app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './partials/list.html',
			controller: 'listController'
		})
		.when('/details/:id', {
			templateUrl: './partials/details.html',
			controller: 'detailsController'

		})
		.when('/gallery/', {
			templateUrl: './partials/gallery.html',
			controller: 'galleryController'

		})
		.otherwise({
			redirectTo: '/'
		});
})

 

