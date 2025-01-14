console.log("Footer : ",app);
app.directive("appFooter", function () {
    return {
      restrict: "E", // Restrict it to be used as an element
      templateUrl:'app/directives/footer/footer.template.html' 
    };
  });
  