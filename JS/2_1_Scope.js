var myModule = angular.module("angularModule", []);

myModule.controller("eventCtrl", ['$scope',
	function($scope){
		$scope.count =0;
		$scope.$on('MyEvent',function(){
			$scope.count++; 
		});
	}
]);

 