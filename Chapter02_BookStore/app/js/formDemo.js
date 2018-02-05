var userInfoModule=angular.module('userInfoModule',[]);


userInfoModule.controller('userInfoCtrl',['$scope',
	 function($scope){

		$scope.userInfo={
		 	email:"asdf@163.com",
		 	password:"asdfasdfasdf",
		 	autoLogin:true 
	 	}

	 	$scope.getUserData=function(){ 
	 	  console.log($scope.userInfo);
	 	}
	 	
	 }

	
]);
 