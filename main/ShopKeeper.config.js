angular
.module("ShopKeeper")
.config(["$locationProvider","$routeProvider",function config($locationProvider,$routeProvider){
	//$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/login',{
		templateUrl:"login/login.html"
	})
	.when('/home',{
		templateUrl:"home/home.html"
	})
	.when('/main',{
		templateUrl:"main/welcome.html"
	})
	.when('/register',{
		templateUrl:"login/Registration.html"
	})
	.otherwise("/main");
}]);


