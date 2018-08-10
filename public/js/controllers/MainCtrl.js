angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $routeParams) {

	var refresh = function () {
		$http.get('/contacts').then(function (response) {
			console.log(response.data);
			$scope.contactlist = response.data;
			$scope.contact = null;
		});
	};

	refresh();

	$scope.addContact = function () {
		$http.post('/contacts', $scope.contact).then(function (response) {
			console.log(response.data);
			refresh();
		});
	};

	$scope.remove = function (id) {
		$http.delete('/contacts/' + id).then(function (response) {
			refresh();
		});
	};

	$scope.edit = function (id) {
		$http.get('/contacts/' + id).then(function (response) {
			$scope.contact = response.data;
		});
	};

	$scope.update = function () {
		$http.put('/contacts/' + $scope.contact._id, $scope.contact).then(function (response) {
			refresh();
		});
	};

	$http.get('/view/' + $routeParams.id).then(function (response) {
		$scope.contact = response.data;
	});

	$scope.clear = function () {
		$scope.contact = null;
	}	

});