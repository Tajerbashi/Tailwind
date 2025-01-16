import { routes } from "../pages/routes.js";
// Configuring `ocLazyLoad`
app.config(function ($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true, // Enable debug mode to track lazy loading
    events: true, // Enable events for loading status
  });
});

// Configuring `$routeProvider` for routes
app.config(function ($routeProvider) {
  routes.forEach((element) => {
    $routeProvider.when(element.path, {
      templateUrl: element.templateUrl,
      controller: element.controller,
      resolve: {
        auth: function (AuthService, $location) {
          const auth = new AuthService();
          // Check if the user is logged in
          if (!auth.isLoggedIn()) {
            $location.path("/login"); // Redirect to login if not authenticated
          }
        },
        lazyLoad: function ($ocLazyLoad) {
          return $ocLazyLoad.load(element.resolve);
        },
      },
    });
  });

  $routeProvider.otherwise({
    redirectTo: "/login", // Redirect to login for undefined routes
  });
});
