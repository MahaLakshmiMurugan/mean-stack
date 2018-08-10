angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/users', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/view-user/:id', {
			templateUrl: 'views/view-user.html',
			controller: 'NerdController'
		})

		.when('/view/:id', {
			templateUrl: 'views/view.html',
			controller: 'MainController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);