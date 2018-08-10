angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http, $routeParams) {

	var refresh = function () {
		$http.get('/users').then(function (response) {
			console.log('test');
			$scope.users = response.data;
			$scope.user = null;
		});
	};

	refresh();

	$scope.addUser = function () {
		$http.post('/users', $scope.nerd).then(function (response) {
			console.log(response.data);
			refresh();
		});
	};

	$scope.remove = function (id) {
		$http.delete('/users/' + id).then(function (response) {
			refresh();
		});
	};

	$scope.edit = function (id) {
		$http.get('/users/' + id).then(function (response) {
			$scope.user = response.data;
		});
	};

	$scope.update = function () {
		$http.put('/users/' + $scope.nerd._id, $scope.nerd).then(function (response) {
			refresh();
		});
	};

	$http.get('/view-user/' + $routeParams.id).then(function (response) {
		$scope.user = response.data;
	});

	$scope.clear = function () {
		$scope.user = null;
	}	
});