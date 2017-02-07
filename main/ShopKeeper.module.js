
var ShopKeeper=angular.module("ShopKeeper",['ngSanitize','ngRoute','login','home','ui.router']);
ShopKeeper.controller("shopkeeperController",function shopkeeperController($rootScope){
	$rootScope.pageToConsider=true;
});

ShopKeeper.run(function($rootScope,$location){
	$rootScope.$on("$stateChangeStart",function(event){
		if($location.path()==="/main" || $location.path()==="/login" || $location.path()==="/register"){
				$rootScope.pageToConsider=true;
		}else{
			$rootScope.pageToConsider=false;
			
		}
	});
});
