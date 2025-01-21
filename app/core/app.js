const app = angular.module("app", ["ngRoute", "oc.lazyLoad"]);

app.controller("AppController", [
  "$scope",
  "AuthService",
  "$http",
  "$ocLazyLoad",
  "$q",
  function ($scope, AuthService, $http, $ocLazyLoad, $q) {
    // Initialize AuthService instance
    const authService = new AuthService();
    $scope.isLoggedIn = authService.isLoggedIn();

    // Logout function
    $scope.logout = function () {
      authService.logout();
    };

    // Path to the JSON file
    const scriptsJsonPath = "app/pages/panel.state.json";

    const loadLazy = async (scripts) => {
      await $ocLazyLoad
        .load(scripts)
        .then(() => {})
        .catch((error) => {
          console.error("Error loading scripts:", error);
        });
    };

    function addScriptTag(scriptUrl) {
      var scriptTag = document.createElement("script");
      scriptTag.src = scriptUrl; // URL from JSON data
      // scriptTag.type = "text/javascript";
      document.head.append(scriptTag);
    }
    $http
      .get(scriptsJsonPath)
      .then((response) => {
        // Extract the `scripts` array from the JSON file
        const scripts = response.data.scripts;
        if (Array.isArray(scripts)) {
          // loadLazy(scripts);
          scripts.forEach((item) => {
            addScriptTag(item);
          });
          // Use $ocLazyLoad to dynamically load the scripts
        } else {
          console.error('Invalid JSON format: "scripts" is not an array');
        }
      })
      .catch((error) => {
        console.error("Error fetching JSON file:", error);
      });
  },
]);
