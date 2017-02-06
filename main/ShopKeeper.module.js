
var ShopKeeper=angular.module("ShopKeeper",['ngSanitize','ngRoute','login','home']);

ShopKeeper.controller("shopkeeperController",function shopkeeperController($scope,$rootScope){
	$rootScope.pageToConsider="home";
});




/*define(["node_modules/jquery/dist/jquery"],function($){
	$('document').ready(function(){
		setTimeout(function(){
			$('<sub>hop</sub>').appendTo('.logo span:first-child');
			$('<sub>eeper</sub>').appendTo('.logo span:last-child');
		},2000);
	});
});
*/

