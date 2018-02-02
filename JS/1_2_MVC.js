var myModule = angular.module("angularModule", []);

myModule.controller("angularCtrl", ['$scope',
	function HelloAngular($scope) {
		$scope.greeting = {
			text: '你好' 
		}
	}
])