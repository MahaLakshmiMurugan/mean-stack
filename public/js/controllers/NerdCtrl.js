angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	var refresh = function () {
		$http.get('/nerds').then(function (response) {
			console.log('test');
			$scope.nerds = response.data;
			$scope.nerd = null;
		});
	};

	refresh();

	$scope.addUser = function () {
		$http.post('/nerds', $scope.nerd).then(function (response) {
			console.log(response.data);
			refresh();
		});
	};

	$scope.remove = function (id) {
		$http.delete('/nerds/' + id).then(function (response) {
			refresh();
		});
	};

	$scope.edit = function (id) {
		$http.get('/nerds/' + id).then(function (response) {
			$scope.nerd = response.data;
		});
	};

	$scope.update = function () {
		$http.put('/nerds/' + $scope.nerd._id, $scope.nerd).then(function (response) {
			refresh();
		});
	};

	$scope.clear = function () {
		$scope.nerd = null;
	}	
});