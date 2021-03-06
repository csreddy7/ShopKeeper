angular
    .module("ShopKeeper")
    .config(["$locationProvider", "$stateProvider", "$urlRouterProvider", function($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/ShopKeeper");
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "login/login.html"
            })
            .state('ShopKeeper', {
                url: "/ShopKeeper",
                templateUrl: "main/welcome.html"
            })
            .state('register', {
                url: "/register",
                templateUrl: "login/Registration.html"
            })
            .state('home', {
                url: "/home",
                templateUrl: "home/home.html"
            })
            .state('home.commodities', {
                url: "/commodities",
                templateUrl: "commodities/commodities.template.html"
            })
            .state('home.dashboard', {
                url: "/dashboard",
                templateUrl: "home/dashboard.template.html"
            })
            .state('home.reports', {
                url: "/reports",
                templateUrl: "reports/reports.template.html"
            })
            .state('home.vendors', {
                url: "/vendors",
                templateUrl: "vendors/vendors.template.html"
            })
            .state('home.orders', {
                url: "/orders",
                templateUrl: "orders/orders.template.html"
            })
            .state('home.myaccount', {
                url: "/myaccount",
                templateUrl: "profile/profile.template.html"
            })

    }]);