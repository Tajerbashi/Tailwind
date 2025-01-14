console.log("App.Config.js is running...");

// Configuring `ocLazyLoad`
app.config(function ($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true, // Enable debug mode to track lazy loading
    events: true, // Enable events for loading status
  });
});

// Configuring `routeProvider` for routes
app.config(function ($routeProvider) {
  $routeProvider
    // Login Route
    .when("/login", {
      templateUrl: "app/pages/login/login.view.html",
      controller: "LoginController",
    })

    // Home Route (Requires Authentication)
    .when("/", {
      templateUrl: "app/pages/home/home.view.html",
      controller: "HomeController",
      resolve: {
        auth: function (AuthService, $location) {
          // Check if the user is logged in
          if (!AuthService.isLoggedIn()) {
            $location.path("/login"); // Redirect to login if not authenticated
          }
        },
        loadHomeController: function ($ocLazyLoad) {
          return $ocLazyLoad.load("app/pages/home/home.controller.js");
        },
      },
    })

    // About Route (Requires Authentication)
    .when("/about", {
      templateUrl: "app/pages/about/about.view.html",
      controller: "AboutController",
      resolve: {
        auth: function (AuthService, $location) {
          if (!AuthService.isLoggedIn()) {
            $location.path("/login");
          }
        },
        loadAboutController: function ($ocLazyLoad) {
          return $ocLazyLoad.load("app/pages/about/about.controller.js");
        },
      },
    })

    // Contact Route (Requires Authentication)
    .when("/contact", {
      templateUrl: "app/pages/contact/contact.view.html",
      controller: "ContactController",
      resolve: {
        auth: function (AuthService, $location) {
          if (!AuthService.isLoggedIn()) {
            $location.path("/login");
          }
        },
        loadContactController: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "app/pages/contact/contact.controller.js",
            "app/pages/contact/contact.style.css",
          ]);
        },
      },
    })

    // Default Route
    .otherwise({
      redirectTo: "/", // Redirect to home for undefined routes
    });
});
