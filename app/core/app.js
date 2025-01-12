console.log("App.js Run ...");

const app = angular.module("app", ["ngRoute", "oc.lazyLoad"]);

console.log("App : ", app);

app.controller("AppController", function ($scope, ScriptLoader) {
  // Load scripts dynamically
  console.log("AppController Controller");
  ScriptLoader.loadScripts();
});
