var app = angular.module("myApp", []);
app.controller("formCtrl", function ($scope, $http) {
  $scope.Data = {};
  $scope.fetchvalue = function () {
    var id = $scope.Data.firstName;
    console.log(id);

    $http.get("http://localhost:3000/login").then(function (response) {
      // $scope.myWelcome = response.data;
    });
  };
});
