angular.module('loginApp',[])
.controller('LoginController',function($scope) {
    $scope.user ={};
    $scope.login =function() {
        alert("login successful!\n username:" + $scope.user.username);

    };
});