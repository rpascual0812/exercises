app.controller('HomeController', function($scope){

	$scope.employees = {
		name : 'Jef',
		age : 40,
		address : 'LA'
	};

	$scope.employees.birthyear = 2016 - $scope.employees.age;

});