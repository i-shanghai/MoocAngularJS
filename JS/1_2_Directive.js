var myModule = angular.module("angularModule", []);

myModule.controller("angularCtrl", ['$scope',
	function($scope) {
		$scope.greeting = {
			text: '你好啊'
		}
		$scope.names = ['姚明','刘翔','小李'];
	}
]);

myModule.directive("hello",function(){
	return{
		restrict:'E',
		template:'<div>Hi EveryOne</div>',
		replace:true
	}
});
