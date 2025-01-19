app.controller("CompanyController", [
  "$scope",
  function ($scope) {
    $scope.toggle = false;
    $scope.toggleMenu = () => {
      $scope.toggle = !$scope.toggle;
    };
  },
]);
