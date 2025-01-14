console.log("App.Factory.js Run ...");
app.factory("AuthService", function ($window) {
  const authKey = "isLoggedIn"; // Key for localStorage or sessionStorage

  var AuthService = function () {};
  AuthService.prototype = {
    login: function () {
      $window.localStorage.setItem(authKey, true);
    },
    logout: function () {
      $window.localStorage.removeItem(authKey);
    },
    isLoggedIn: function () {
      return $window.localStorage.getItem(authKey) === "true";
    },
  };
  return AuthService;
});
