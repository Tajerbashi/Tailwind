console.log("App.js Run ...");

const app = angular.module("app", ["ngRoute", "oc.lazyLoad"]);

// app.run(function ($rootScope, $location, AuthService) {
//   $rootScope.$on("$routeChangeStart", function (event, next) {
//     const isAuthenticated = AuthService.isLoggedIn();
//     const isLoginPage = next.templateUrl === "app/pages/login/login.view.html";

//     if (!isAuthenticated && !isLoginPage) {
//       $location.path("/login");
//     }
//   });
// });



app.controller("AppController", function ($scope, ScriptLoader,AuthService) {
  // Load scripts dynamically
  console.log("AppController Controller",AuthService);
  ScriptLoader.loadScripts();
  let authService =new AuthService();
  $scope.isLoggin = authService.isLoggedIn()
  $scope.logout = function () {
    AuthService.logout();
  };
});


