// app.service("ScriptLoaderService", function ($http, $ocLazyLoad, $q) {
//   // Fetch the JSON file
//   this.loadScripts = function (jsonPath) {
//     const deferred = $q.defer();

//     $http
//       .get(jsonPath)
//       .then(function (response) {
//         const scripts = response.data.scripts;

//         if (Array.isArray(scripts)) {
//           // Use $ocLazyLoad to load scripts
//           $ocLazyLoad
//             .load(scripts)
//             .then(function () {
//               console.log("All scripts loaded successfully!");
//               deferred.resolve();
//             })
//             .catch(function (error) {
//               console.error("Error loading scripts:", error);
//               deferred.reject(error);
//             });
//         } else {
//           deferred.reject('Invalid JSON format: "scripts" is not an array');
//         }
//       })
//       .catch(function (error) {
//         console.error("Error fetching JSON:", error);
//         deferred.reject(error);
//       });

//     return deferred.promise;
//   };
// });

// app.run([
//   "$http",
//   "$ocLazyLoad",
//   "$q",
//   function ($http, $ocLazyLoad, $q) {
//     console.log("1231231231231321");
//     $http
//       .get("../pages/panel.state.json")
//       .then((res) => {
//         console.log("RES : ", res);
//       })
//       .catch((err) => {
//         console.log("ERROR");
//       });
//   },
// ]);
