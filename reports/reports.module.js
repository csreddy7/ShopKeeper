var reports = angular.module("reports", []);
reports.controller("reportsController", function reportsController($scope) {
    $scope.reports = ["Customer Orders", "Vendor Orders"];
});