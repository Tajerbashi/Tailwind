console.log("App.Factory.js Run ...");
app.factory("AuthService", function ($window, $location) {
  const authKey = "_auth"; // Key for localStorage or sessionStorage

  var AuthService = function () {};
  AuthService.prototype = {
    login: function (parameters) {
      parameters.isLoggin = true;
      parameters.isLoggin = parameters.email;
      $window.localStorage.setItem(authKey, JSON.stringify(parameters));
      $location.path('/'); // Use $location for SPA navigation
      console.log("Logged in and redirected to home.");
      return parameters.isLoggin;
    },
    logout: function () {
      $window.localStorage.removeItem(authKey);
      $location.path('/login'); // Redirect to login page on logout
      console.log("Logged out and redirected to login.");
    },
    isLoggedIn: function () {
      let model = JSON.parse($window.localStorage.getItem(authKey));
      if (!model || !model.isLoggin) {
        $location.path("/login");
        return false;
      }
      return true;
    },
    currentUserInfo: function () {
      return JSON.parse($window.localStorage.getItem(authKey));
    },
  };
  return AuthService;
});
