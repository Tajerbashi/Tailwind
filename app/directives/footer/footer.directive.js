app.directive("appFooter", function () {
  return {
    restrict: "E", // Restrict it to be used as an element
    templateUrl: "app/directives/footer/footer.template.html",
    link: function (scope) {
      const existingLink = document.querySelector(
        'link[href="app/directives/footer/footer.style.css"]'
      );
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "app/directives/footer/footer.style.css";
        document.head.appendChild(link);
      }
    },
  };
});
