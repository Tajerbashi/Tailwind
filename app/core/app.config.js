angular.module("app").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<h1>Welcome to AngularJS App</h1>",
      })
      .when("/feature1", {
        templateUrl: "app/components/feature1/feature1.template.html",
        controller: "Feature1Controller",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
