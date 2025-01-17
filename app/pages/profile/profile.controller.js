app.controller("ProfileController", [
  "$scope",
  function ($scope) {
    $scope.message = "This is the Calendar Page!";
    $scope.emptyProfileViewModel = {
      email: "kamrantajerbashi@gmail.com",
      name: "kamran",
      family: "Tajebashi",
      phoneNumber: "09020320844",
      username: "Tajerbashi",
      password: "@Tajerbashi!123",
      country: "2",
      isRemember: true,
      image: "../../../assets/images/img3.jpg",
    };
    $scope.profileViewModel = angular.copy($scope.emptyProfileViewModel);
    console.log("$scope.profileViewModel : ", $scope.profileViewModel);
  },
]);
