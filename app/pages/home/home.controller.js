app.controller("HomeController", function ($scope, AuthService, $location) {
  $scope.logout = function () {
    AuthService.logout();
    $location.path("/login"); // Redirect to login after logout
  };
  $scope.dashboardSection = [
    {
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
    {
      title: "Feature 10",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
      with: "",
    },
  ];

});
