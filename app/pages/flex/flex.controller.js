app.controller("FlexController", function ($scope) {
  const toggleVisible = (item) => {
    item.visible = !item.visible;
    console.log("Item : ", item);
  };
  const basePath = "/app/pages/flex/templates/";
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
      title: "Flex",
      action: (item) => {
        toggleVisible(item);
      },
      visible: false,
      path: basePath + "code1.html",
    },
    {
      title: "Flex Display",
      action: (item) => {
        toggleVisible(item);
      },
      visible: false,
      path: basePath + "code1.html",
    },
    {
      title: "Flex Grow",
      action: (item) => {
        toggleVisible(item);
      },
      visible: false,
      path: basePath + "flexGrow.html",
    },
    {
      title: "Flex Shrink",
      action: (item) => {
        toggleVisible(item);
      },
      visible: false,
      path: basePath + "flexShrink.html",
    },
    {
      title: "Flex Home",
      action: (item) => {
        toggleVisible(item);
      },
      visible: true,
      path: basePath + "flexHome.html",
    },
  ];
});
