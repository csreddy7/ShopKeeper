angular
.module("ShopKeeper")
.config(["$locationProvider","$routeProvider",function config($locationProvider,$routeProvider){
	//$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/loginPage',{
		templateUrl:"login/login.html"
	})
	.when('/mainPage',{
		templateUrl:"main/main.html"
	})
	.otherwise("/loginPage");
}]);