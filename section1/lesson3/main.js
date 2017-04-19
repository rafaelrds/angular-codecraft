var app = angular.module('minmax', []);

// https://minmax-server.herokuapp.com/register/'

app.controller('MinMaxCtrl', function ($scope, $http) {
    $scope.formData = {};
    $scope.onSubmit = function () {
        console.log("Submitted!");
        $http.post("https://minmax-server.herokuapp.com/register/'", $scope.formData).
            success(function(data){
                console.log(":)");
                console.log($scope.formData);
            }).error(function (data) {
                console.log(":(");
        });
    }
});