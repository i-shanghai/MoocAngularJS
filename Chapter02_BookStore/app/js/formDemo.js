var userInfoModule = angular.module('userInfoModule', []);


userInfoModule.controller('userInfoCtrl', ['$scope',
    function($scope) {

        $scope.userInfo = {
            email: "asdf@163.com",
            password: "asdfasdfasdf",
            autoLogin: true
        }

        $scope.getUserData = function() {
            console.log($scope.userInfo);
        }

        $scope.setUserData = function() {
            $scope.userInfo = {
                email: "111111@163.com",
                password: "222222222",
                autoLogin: false
            }
        }

        $scope.btnStyle = "success";
        $scope.setBtnStyle = function() {
            var btnStyleList = new Array('default', 'primary', 'success', 'info', 'warning', 'danger');
            var i = parseInt((Math.random() / 2) * 10);
            console.log(i);
            $scope.btnStyle = btnStyleList[i];
        }


        $scope.isPrimary = true;
        $scope.isInfo = false;
        $scope.isDanger = false;
        $scope.setNgClass = function() {
            $scope.isPrimary = true;
            $scope.isInfo = false;
            $scope.isDanger = false;
        }
        $scope.setNgClassInfo = function() {
            $scope.isInfo = true;
            $scope.isPrimary = false;
            $scope.isDanger = false;
        }
        $scope.setNgClassDanger = function() {
            $scope.isPrimary = false;
            $scope.isInfo = false;
            $scope.isDanger = true;
        }

        $scope.menuState={show:false};
        $scope.toggleMenu=function(){
        	$scope.menuState.show=!$scope.menuState.show;
        }

    }


]);