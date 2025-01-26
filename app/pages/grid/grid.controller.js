app.controller("GridController", function ($scope) {
  const toggleVisible = (item) => {
    item.visible = !item.visible;
    console.log("Item : ", item);
  };
  const basePath = "/app/pages/grid/templates/";
  $scope.buttons = [
    {
      title: "Controller",
      action: (item) => {
        toggleVisible(item);
      },
      visible: false,
      path: basePath + "controller.html",
    },

    {
      title: "Grid",
      action: (item) => {
        toggleVisible(item);
      },
      visible: true,
      path: basePath + "gridContainer.html",
    },
  ];
});
