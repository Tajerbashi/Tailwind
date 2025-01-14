app.directive("appHeader", function () {
  return {
    restrict: "E", // Restrict it to be used as an element
    templateUrl: "app/directives/header/header.template.html",
    link: function () {
      // Check if the CSS file is already added
      const existingLink = document.querySelector('link[href="app/directives/header/header.style.css"]');
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "app/directives/header/header.style.css";
        document.head.appendChild(link);
      }
    },
  };
});
