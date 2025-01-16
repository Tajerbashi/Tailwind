app.controller("AboutController", [
  "$scope",
  function ($scope) {
    $scope.message = "This is the Calendar Page!";
    $scope.title = "Welcome to the About Page!";
    $scope.content = "Content";
    $scope.ChangeContent = (value) => {
      $scope.content = value;
    };
  },
]);
