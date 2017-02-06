var home=angular.module("home",[]);
home.controller("mainController",function mainController($scope,$location){
$scope.goTo=function(str){
        $location.path(str);
}
});

home.config(["$routeProvider",function($routeProvider){
$routeProvider.when('/commodities',{
		templateUrl:"commodities/commodities.template.html"
	})
.when('/main',{
    templateUrl:"home/main-welcome-page.html"
})
.when('/reports',{
    templateUrl:"reports/reports.template.html"
})
.when('/vendors',{
    templateUrl:"vendors/vendors.template.html"
})
.when('/orders',{
    templateUrl:"orders/orders.template.html"
})
.when('/myaccount',{
    templateUrl:"profile/profile.template.html"
})

}]);