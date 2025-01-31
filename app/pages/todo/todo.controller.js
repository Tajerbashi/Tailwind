app.controller("TodoController", [
  "$scope",
  "$window",
  function ($scope, $window) {
    const datakey = "TodoDataSource";

    $scope.groups = [];
    $scope.clearSources = () => {
      localStorage.removeItem(datakey);
    };
    $scope.emptyGroup = {
      id: undefined,
      title: "",
      child: { id: undefined, title: "" },
      pin: false,
      visible: true,
    };
    $scope.GroupModel = angular.copy($scope.emptyGroup);

    $scope.addGroup = () => {
      let newGroup = {
        id: newId(),
        title: $scope.GroupModel.title,
        items: [],
      };
      $scope.groups.push(newGroup);
      updateDatasource($scope.groups);
      $scope.GroupModel = angular.copy($scope.emptyGroup);
    };

    $scope.addTodo = (group) => {
      if (group.child.id == undefined) {
        group.items.push({
          id: newId(),
          title: angular.copy(group.child.title),
          isPassed: false,
          updateDate: new Date().toLocaleString(),
        });
      } else {
        var model = group.items.find((elem) => elem.id == group.child.id);
        model.title = group.child.title;
        model.updateDate = new Date().toLocaleString();

        var index = group.items.findIndex((item) => item.id == model.id);
        group.items[index] = model;
      }

      group.child = {
        title: "",
        id: undefined,
      };

      updateDatasource($scope.groups);
    };
    $scope.onDelete = (group, item) => {
      var model = group.items.filter((element) => element.id !== item.id);
      group.items = angular.copy(model);
      var index = $scope.groups.findIndex((item) => item.id == group.id);
      $scope.groups[index] = angular.copy(group);
      if (confirm("Are You Sure Delete Item ( " + item.title + " )?")) {
        updateDatasource($scope.groups);
      } else {
      }
    };
    $scope.onEdit = (group, item) => {
      group.child = {
        id: angular.copy(item.id),
        title: angular.copy(item.title),
      };
    };
    $scope.togglePassed = (groups, item) => {
      var model = groups.items.find((element) => element.id === item.id);
      model.isPassed = !model.isPassed;
      updateDatasource($scope.groups);
    };
    const updateDatasource = (data) => {
      localStorage.removeItem(datakey);
      localStorage.setItem(datakey, JSON.stringify(data));
      onInit();
    };
    const getData = () => {
      var data = localStorage.getItem(datakey);
      var result = JSON.parse(data);
      return result;
    };
    const onInit = () => {
      $scope.groups = [];
      var data = getData();
      if (data) {
        $scope.groups = angular.copy(data);
      } else {
        $scope.groups = [];
      }
    };
    onInit();
    const newId = () => Math.floor(Math.random() * 10000000);
  },
]);
