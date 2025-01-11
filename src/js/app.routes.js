import { pagesRouter, Print } from "../app/pages/router";

console.log("PAGE  app : ", Print());
console.log("PAGE  app : ", pagesRouter);
console.log("PAGE  app : ", app);

// app.config(function ($routeProvider, $locationProvider, $ocLazyLoadProvider) {
//   // Set hashPrefix to avoid encoding # as %23
//   $locationProvider.hashPrefix("");

//   // Dynamically configure routes from the pagesRouter
//   pagesRouter.forEach(function (route) {
//     $routeProvider.when(route.path, {
//       templateUrl: route.templateUrl,
//       controller: route.controller,
//       resolve: {
//         loadMyModule: function ($ocLazyLoad) {
//           return $ocLazyLoad.load([route.controller]);
//         },
//       },
//     });
//   });

//   $routeProvider.otherwise({
//     redirectTo: "/home", // Default route
//   });
// });
