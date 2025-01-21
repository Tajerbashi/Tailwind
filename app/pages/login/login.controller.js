app.controller("LoginController", [
  "$scope",
  "$location",
  "AuthService",
  function ($scope, $location, AuthService) {
    $scope.message = "This is the Calendar Page!";
    var authService = new AuthService();

    $scope.loginModel = {
      email: "kamrantajerbashi@gmail.com",
      password: "@Tajerbashi!123",
      username: "Tajerbashi",
      isRemeber: true,
    };

    $scope.login = function () {
      let res = authService.login($scope.loginModel);
      if (res) {
        $location.path("/"); // Redirect to home after login
      } else {
        $location.path("/login"); // Redirect to home after login
      }
    };
  },
]);
