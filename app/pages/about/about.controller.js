app.controller("AboutController", function ($scope) {
  console.log("AboutController Loaded");
  $scope.title = "Welcome to the About Page!";
  $scope.content = "Content";
  $scope.ChangeContent = (value) => {
    $scope.content = value;
  };
});
