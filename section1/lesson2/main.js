var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope) {
    $scope.formData = {};
    $scope.onSubmit = function () {
        console.log("Submitted!");
        console.log($scope.formData);
    };
});