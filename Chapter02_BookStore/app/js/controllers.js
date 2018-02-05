var bookStoreCtrls=angular.module('bookStoreCtrls',[]);


bookStoreCtrls.controller('HelloCtrl',['$scope',
	function($scope){
		$scope.greeting={
			text:'Hello '
		};
	}
]);

bookStoreCtrls.controller('BookListCtrl',['$scope',
	function($scope){
		$scope.books=[
			{title:'《C#图解教程》',author:'James'},
			{title:'《深入理解C#》',author:'James'},
			{title:'《设计模式》',author:'James'}
		];
	}
]);