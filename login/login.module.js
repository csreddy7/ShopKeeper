var login=angular.module("login",[]);
login.controller("loginController",function loginController($scope,$location){
	$scope.username="";
	$scope.password="";
	$scope.validate=function(){
		if($scope.username=="admin" && $scope.password=="admin"){
			$scope.status="Success&nbsp;&nbsp;<span class='glyphicon glyphicon-ok'></span>";
			$('.status').removeClass("alert alert-danger");
			$('.status').addClass("alert alert-success");
			$('.status').fadeIn(1000);
			setTimeout(function(){
				$('.status').fadeOut(1000);
			},100);
			$location.path('home');

		}else{
			$scope.status="Failure&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-remove'></span>";
			$('.status').removeClass("alert alert-success");
			$('.status').addClass("alert alert-danger");
			$('.status').fadeIn(1000);
			setTimeout(function(){
				$('.status').fadeOut(1000);
			},2000);
		}
	}
});