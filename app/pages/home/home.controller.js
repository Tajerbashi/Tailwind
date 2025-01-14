app.controller("HomeController", function ($scope, AuthService, $location) {
  $scope.logout = function () {
    AuthService.logout();
    $location.path("/login"); // Redirect to login after logout
  };
});
