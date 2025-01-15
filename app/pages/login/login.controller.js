app.controller("LoginController", function ($scope, $location, AuthService) {
  var authService = new AuthService();

  console.log("AuthService : ", authService);
  console.log("$scope : ", $scope);
  $scope.loginModel = {
    email: "kamrantajerbashi@gmail.com",
    password: "@Tajerbashi!123",
    username: "Tajerbashi",
    isRemeber: true,
  };

  $scope.login = function () {
    if (authService.login($scope.loginModel)) {
      $location.path("/"); // Redirect to home after login
    } else {
      $location.path("/login"); // Redirect to home after login
    }
    console.log("Login", $scope.loginModel);
  };
});
