var myModule=angular.moddule("angularModule",[]);

myModule.controller("angularCtrl",['$scope',
	function($scope){
		$scope.greeting={
			text:'你好'
		} 
	}

]);