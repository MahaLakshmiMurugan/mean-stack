angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	var refresh = function () {
		$http.get('/nerds').then(function (response) {
			console.log(response.data);
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


});