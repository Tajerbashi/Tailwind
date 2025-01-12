console.log("App.Config.js Run ...", app);

app.config(function ($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
    debug: true, // Enable debug mode to see if the controller is loaded
    events: true, // Enable events to listen for when the file is loaded
  });
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "app/pages/home/home.view.html", // Use absolute path
      controller: "HomeController",
      resolve: {
        loadHomeController: function ($ocLazyLoad) {
          return $ocLazyLoad.load("app/pages/home/home.controller.js");
          // Lazy load the home.controller.js
        },
      },
    })
    .when("/about", {
      templateUrl: "app/pages/about/about.view.html", // Ensure path is correct
      controller: "AboutController",
      resolve: {
        loadAboutController: function ($ocLazyLoad) {
          return $ocLazyLoad.load("app/pages/about/about.controller.js"); // Lazy load the about.controller.js
        },
      },
    })
    .when("/contact", {
      templateUrl: "app/pages/contact/contact.view.html", // Ensure path is correct
      controller: "ContactController",
      resolve: {
        loadContactController: function ($ocLazyLoad) {
          return $ocLazyLoad.load([
            "app/pages/contact/contact.controller.js",
            "app/pages/contact/contact.style.css",
          ]); // Lazy load the contact.controller.js
        },
      },
    })
    .otherwise({
      redirectTo: "/",
    });
});
