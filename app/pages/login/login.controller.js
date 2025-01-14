app.controller("LoginController", function ($scope, AuthService, $location) {
    $scope.login = function () {
      // Simulate login logic
      AuthService.login();
      $location.path("/"); // Redirect to home after login
    };
  });
  