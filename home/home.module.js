var home = angular.module("home", ['ui.router']);
home.controller("homeController", function homeController($scope, $location) {

    $scope.dailyOrders = { 1: { orders: 30 }, 2: { orders: 50 }, 3: { orders: 60 }, 4: { orders: 20 }, 5: { orders: 35 }, 6: { orders: 10 }, 7: { orders: 40 }, 8: { orders: 80 }, 9: { orders: 10 }, 10: { orders: 50 } };
    $scope.renderDashBoard = function() {
        var svg = $("svg"),
            x = 45;
        for (var i in $scope.dailyOrders) {
            var order = $scope.dailyOrders[i].orders;
            if (order) {
                if (order < 30) {
                    color = "red";
                } else {
                    color = "green"
                }
                //svg.append('<rect x="' + x + '" y="350" width="' + Math.floor(order * 3.5) + '" height="20" fill="' + color + '" transform="rotate(270 ' + x + ' 350)" />');
                var el = document.createElementNS('http://www.w3.org/2000/svg', "rect");
                el.setAttribute("x", x);
                el.setAttribute("y", 350);
                el.setAttribute("width", Math.floor(order * 3.5));
                el.setAttribute("height", 20);
                el.setAttribute("fill", color);
                el.setAttribute("transform", 'rotate(270 ' + x + ' 350)');
                document.getElementById('dashboard-svg').appendChild(el);
            }
            x += 25;
        }
    }

});