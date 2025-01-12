console.log("App.Service.js Run ...");

app.service("ScriptLoader", function ($http) {
  this.loadScripts = function () {
    return $http
      .get("app/pages/panel.state.json") // Path to your JSON file
      .then(function (response) {
        var scripts = response.data.scripts;
        angular.forEach(scripts, function (script) {
          var scriptTag = document.createElement("script");
          scriptTag.src = script;
          scriptTag.type = "text/javascript";
          scriptTag.async = true;
          document.head.appendChild(scriptTag);
        });
      })
      .catch(function (error) {
        console.error("Error loading scripts:", error);
      });
  };
});
