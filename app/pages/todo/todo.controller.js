app.controller("TodoController", [
  "$scope",
  function ($scope, $window) {
    const datakey = "TodoDataSource";

    $scope.lessons = [];
    $scope.emptyTodoTitle = {
      id: undefined,
      title: "",
      isPassed: false,
    };
    $scope.TodoTitleModel = angular.copy($scope.emptyTodoTitle);
    $scope.addTodo = () => {
      if ($scope.TodoTitleModel.id) {
        console.log("$scope.lessons : ", $scope.lessons);
        var model = $scope.lessons.findIndex(
          (item) => item.id == $scope.TodoTitleModel.id
        );
        $scope.lessons[model] = $scope.TodoTitleModel;
        console.log("model : ", model);
        console.log("$scope.TodoTitleModel : ", $scope.TodoTitleModel);
        console.log("$scope.lessons : ", $scope.lessons);
      } else {
        $scope.TodoTitleModel.id = newId();
        $scope.lessons.push($scope.TodoTitleModel);
      }
      updateDatasource($scope.lessons);
    };
    $scope.onDelete = (item) => {
      var model = $scope.lessons.filter((element) => element.id !== item.id);

      if (confirm("Are You Sure Delete Item ( " + item.title + " )?")) {
        updateDatasource(model);
      } else {
      }
    };
    $scope.onEdit = (item) => {
      $scope.TodoTitleModel = angular.copy(item);
    };
    $scope.togglePassed = (item) => {
      var model = $scope.lessons.find((element) => element.id === item.id);
      model.isPassed = !model.isPassed;
      updateDatasource($scope.lessons);
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
      $scope.TodoTitleModel = angular.copy($scope.emptyTodoTitle);
      var data = getData();
      if (data) {
        $scope.lessons = angular.copy(data);
      } else {
        $scope.lessons = [];
      }
    };
    onInit();
    const newId = () => {
      return Math.floor(Math.random() * 10000000);
    };
  },
]);
